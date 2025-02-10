'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
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
      // Temporary mock login for frontend development
      console.log('Login data:', data);
      toast.success('Welcome back! (Demo Mode)');
      router.push('/dashboard');
      
      // Commented backend integration for now
      /*
      const response = await axios.post('/api/auth/login', data);
      toast.success('Welcome back!');
      router.push('/dashboard');
      router.refresh();
      */
    } catch (error: any) {
      toast.error('Login failed (Demo Mode)');
    } finally {
      setLoading(false);
    }
  };

  const register = async (data: RegisterData) => {
    try {
      setLoading(true);
      // Temporary mock registration for frontend development
      console.log('Register data:', data);
      toast.success('Account created successfully! (Demo Mode)');
      router.push('/auth/login');
      
      // Commented backend integration for now
      /*
      await axios.post('/api/auth/register', data);
      toast.success('Account created successfully!');
      router.push('/auth/login');
      */
    } catch (error: any) {
      toast.error('Registration failed (Demo Mode)');
    } finally {
      setLoading(false);
    }
  };

  return { login, register, loading };
} 