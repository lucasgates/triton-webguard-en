
import React, { useState } from 'react';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

interface CountryCode {
  code: string;
  dial: string;
  name: string;
}

const PhoneInput: React.FC<PhoneInputProps> = ({ value, onChange, className }) => {
  const [countryCode, setCountryCode] = useState('+55'); // Brazil as default
  const [phoneNumber, setPhoneNumber] = useState(value.replace(/^\+\d+\s/, ''));

  const countryCodes: CountryCode[] = [
    { code: 'BR', dial: '+55', name: 'Brasil' },
    { code: 'US', dial: '+1', name: 'Estados Unidos' },
    { code: 'PT', dial: '+351', name: 'Portugal' },
    { code: 'ES', dial: '+34', name: 'Espanha' },
    { code: 'AR', dial: '+54', name: 'Argentina' },
    { code: 'CL', dial: '+56', name: 'Chile' },
    { code: 'CO', dial: '+57', name: 'Colômbia' },
    { code: 'MX', dial: '+52', name: 'México' },
    { code: 'PE', dial: '+51', name: 'Peru' },
    { code: 'UY', dial: '+598', name: 'Uruguai' },
    { code: 'FR', dial: '+33', name: 'França' },
    { code: 'DE', dial: '+49', name: 'Alemanha' },
    { code: 'IT', dial: '+39', name: 'Itália' },
    { code: 'UK', dial: '+44', name: 'Reino Unido' },
    { code: 'CA', dial: '+1', name: 'Canadá' },
  ];

  const handleCountryChange = (value: string) => {
    setCountryCode(value);
    updateCombinedValue(value, phoneNumber);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPhone = e.target.value;
    setPhoneNumber(newPhone);
    updateCombinedValue(countryCode, newPhone);
  };

  const updateCombinedValue = (code: string, phone: string) => {
    onChange(`${code} ${phone}`);
  };

  // Encontrar o nome do país correspondente ao código
  const getCountryName = (dial: string) => {
    const country = countryCodes.find(c => c.dial === dial);
    return country ? country.name : '';
  };

  return (
    <div className={`relative ${className}`}>
      <div className="absolute left-0 top-0 bottom-0 z-10 border-r border-input">
        <Select value={countryCode} onValueChange={handleCountryChange}>
          <SelectTrigger className="h-full border-0 rounded-r-none rounded-l-md bg-muted/50 px-3 w-[140px]">
            <SelectValue placeholder="País">
              {getCountryName(countryCode)} {countryCode}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {countryCodes.map(country => (
              <SelectItem key={country.code} value={country.dial} className="flex justify-between">
                {country.name} {country.dial}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Input
        type="tel"
        value={phoneNumber}
        onChange={handlePhoneChange}
        placeholder="Seu telefone"
        className="pl-[145px]"
      />
    </div>
  );
};

export default PhoneInput;
