import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-hot-toast';

interface LoginData {
  email: string;
  password: string;
}

interface RegisterData extends LoginData {
  name: string;
}

export function useAuth() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const login = async (data: LoginData) => {
    try {
      setLoading(true);
      const response = await axios.post('/api/auth/login', data);
      toast.success('Logged in successfully!');
      router.push('/dashboard');
    } catch (error) {
      toast.error('Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  const register = async (data: RegisterData) => {
    try {
      setLoading(true);
      const response = await axios.post('/api/auth/register', data);
      toast.success('Account created successfully!');
      router.push('/auth/login');
    } catch (error) {
      toast.error('Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return { login, register, loading };
} 