import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { Loader2 } from 'lucide-react';

interface LoginDialogProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onSuccess?: () => void;
}

const LoginDialog: React.FC<LoginDialogProps> = ({ isOpen, setIsOpen, onSuccess }) => {
  const { login, register, loading, error } = useAuth();
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [formError, setFormError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setFormError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    try {
      if (isRegister) {
        // Validate form for registration
        if (!formData.name.trim()) {
          setFormError('Name is required');
          return;
        }
        if (formData.password !== formData.confirmPassword) {
          setFormError('Passwords do not match');
          return;
        }
        if (formData.password.length < 6) {
          setFormError('Password must be at least 6 characters');
          return;
        }
        
        await register(formData.name, formData.email, formData.password);
      } else {
        // Login
        await login(formData.email, formData.password);
      }
      
      // If successful
      setIsOpen(false);
      if (onSuccess) onSuccess();
      
    } catch (err) {
      console.error('Authentication error:', err);
    }
  };

  const toggleMode = () => {
    setIsRegister(!isRegister);
    setFormError(null);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{isRegister ? 'Create an Account' : 'Log In'}</DialogTitle>
          <DialogDescription>
            {isRegister 
              ? 'Sign up for an account to start shopping with us.' 
              : 'Enter your credentials to access your account.'}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            {isRegister && (
              <div className="grid gap-2">
                <Label htmlFor="name" className="text-left">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                />
              </div>
            )}
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-left">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password" className="text-left">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                autoComplete={isRegister ? "new-password" : "current-password"}
              />
            </div>
            {isRegister && (
              <div className="grid gap-2">
                <Label htmlFor="confirmPassword" className="text-left">
                  Confirm Password
                </Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  autoComplete="new-password"
                />
              </div>
            )}
            {(formError || error) && (
              <p className="text-destructive text-sm">{formError || error}</p>
            )}
          </div>
          <DialogFooter className="flex flex-col space-y-2">
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </>
              ) : isRegister ? (
                'Sign Up'
              ) : (
                'Log In'
              )}
            </Button>
            <Button type="button" variant="link" onClick={toggleMode}>
              {isRegister
                ? 'Already have an account? Log In'
                : "Don't have an account? Sign Up"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;