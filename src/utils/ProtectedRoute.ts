import React, { ReactNode } from 'react';
import { Route, Navigate } from 'react-router-dom';

interface Prop {
  component: ReactNode;
}

const ProtectedRoute = ({ component, ...rest }: Prop) => {};
