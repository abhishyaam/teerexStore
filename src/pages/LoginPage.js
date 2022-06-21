import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { TeeRexState } from '../context';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = TeeRexState();
  const handleLogin = () => {
    if (email === 'user@abc.com' && password === '1234')
      setUser({ email, password });
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
      }}
    >
      <Paper
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '20%',
          p: 5,
          minWidth: 300,
        }}
      >
        <Typography
          variant='h4'
          sx={{ textAlign: 'center' }}
          noWrap
          component='div'
        >
          Welcome!!
        </Typography>
        <TextField
          sx={{ m: 1 }}
          required
          label='Email'
          type='email'
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
        />

        <TextField
          sx={{ m: 1 }}
          required
          label='Password'
          type='password'
          value={password}
          onChange={({ target: { value } }) => setPassword(value)}
        />

        <Button
          type='submit'
          sx={{ m: 1 }}
          variant='contained'
          onClick={handleLogin}
        >
          Login
        </Button>
      </Paper>
    </Box>
  );
};

export default LoginPage;
