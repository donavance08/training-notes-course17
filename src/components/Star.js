import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

export default function Star({ selected, onSelect }) {
  return (
    <FaStar
      color={selected ? 'red' : 'black'}
      onClick={onSelect}
    />
  );
}
