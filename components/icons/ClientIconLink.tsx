'use client';

import React from 'react';
import Image from 'next/image';
import { BasicLink } from '@/types';

type ClientIconLinkProps = BasicLink;

const ClientIconLink = ({ icon, name, to }: ClientIconLinkProps) => {
  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    window.open(to, '_blank');
  };
  return (
    <div
      onClick={onClick}
      className="cursor-pointer brightness-[.6] hover:brightness-200"
    >
      <Image className="invert" src={icon} alt={name} height={20} width={20} />
    </div>
  );
};

export default ClientIconLink;
