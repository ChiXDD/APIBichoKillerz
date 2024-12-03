import connection from '../BD/connection'
import bcrypt from 'bcrypt'

export class AuthController {
  async register(email: string, pass: string): Promise<void> {
    const [existingUser] = await connection.execute(
      'SELECT * FROM usuarios WHERE email = ?',
      [email]
    );
    if ((existingUser as any[]).length > 0) {
      throw new Error('El usuario ya está registrado');
    }

    const hashedPassword = await bcrypt.hash(pass, 10);
    await connection.execute(
      'INSERT INTO usuarios (email, pass) VALUES (?, ?)',
      [email, hashedPassword]
    );
  }

  async login(email: string, pass: string): Promise<void> {
    const [users] = await connection.execute(
      'SELECT * FROM usuarios WHERE email = ?',
      [email]
    );
    if ((users as any[]).length === 0) {
      throw new Error('Usuario o contraseña incorrectos');
    }

    const user = (users as any[])[0];
    const isMatch = await bcrypt.compare(pass, user.password);
    if (!isMatch) {
      throw new Error('Usuario o contraseña incorrectos');
    }
  }
}
