'use client'

import { invoke } from '@tauri-apps/api/tauri'
import { useEffect, useState } from 'react';

export function Greet() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    invoke<string>('greet', { name: 'Next.js' })
      .then(result => setGreeting(result))
      .catch(console.error)
  }, [])

  // Necessary because we will have to use Greet as a component later.
  return <div>{greeting}</div>;
}
