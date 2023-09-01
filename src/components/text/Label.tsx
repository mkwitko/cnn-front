import React from 'react';

export default function B2BLabel({ title }: { title: string }) {
  return (
    <label className="mb-2 block text-xs font-medium lg:text-sm ">
      <p>{title}</p>
    </label>
  );
}
