import React from 'react';
import { EmployeeDetailsForm } from '../components/employeeDetailsForm';

export function EmployeeDetails({ route }) {
    const item = route.params;

    return (
        <EmployeeDetailsForm item={ item } />
    );
}

