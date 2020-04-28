import React from 'react';
export default function useUser(){
    
    const getId = ()=>localStorage.getItem('id');

    const getEmail = ()=>localStorage.getItem('email');
    
    return{ getId, getEmail }
}