import React from 'react';
import Telegram from '@/components/icons/telegram';

interface IRadioOption {
  value?: string;
  content: React.ReactNode;
}

interface IInputRadioProps {
  className?: string;
  value?: string;
  onChange: (value?: string) => void;
  options: IRadioOption[];
}

export default function InputRadio(props: IInputRadioProps) {
  return (
    <div className={`flex flex-row items-center ${props.className}`}>
      {props.options.map((option) => (
        <div key={option.value || 'empty'} className="flex flex-row items-center mr-6">
          <div
            tabIndex={0}
            role="button"
            onClick={() => props.onChange(option.value)}
            onKeyDown={() => props.onChange(option.value)}
            className="pr-4 py-1 duration-500 flex flex-row items-center"
          >
            <div
              className={`w-8 h-8 border rounded-full duration-200 flex items-center justify-center ${
                props.value ? 'bg-white' : 'bg-white'
              }`}
            >
              <div
                className={`w-5 h-5 bg-green rounded-full duration-200 ${
                  props.value === option.value ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>
            <div>{option.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
