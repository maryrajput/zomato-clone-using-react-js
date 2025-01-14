import React from 'react';
import TextIconClickable from '@/lib/ui/useable-components/text-icon-clickable';
import { TPaymentType } from '@/lib/utils/types/payment-type';
import { StripeSVG } from '@/lib/utils/assets/svgs/stripe';
import { IPaymentCardProps } from '@/lib/utils/interfaces';

export default function PaymentCard({
  name,
  description,
  onClick,
  loading,
  icon,
  type,
}: IPaymentCardProps & { type: TPaymentType }) {
  const LogoComponent = type === 'stripe' ? StripeSVG : null;

  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-6">
      <div className="mb-6 flex items-center justify-center">
        {LogoComponent && <LogoComponent />}
      </div>
      <h2 className="mb-2 text-lg font-bold text-black">{name}</h2>
      <p className="mb-4 text-center text-gray-500">{description}</p>
      <TextIconClickable
        className="rounded border-gray-300 bg-black text-white"
        icon={icon}
        iconStyles={{ color: 'white' }}
        title={`Connect with ${name}`}
        onClick={onClick}
        loading={loading}
      />
    </div>
  );
}