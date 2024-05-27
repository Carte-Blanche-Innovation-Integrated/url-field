import clsx from 'clsx';
import {type ElementType, useEffect, useState} from 'react';
import {FieldError, Input, TextField} from 'react-aria-components';

import debounce from 'just-debounce-it';

import {socialIconsMap} from './social-icons';
import {tryParseUrlDomain} from './utils';

interface Props {
  name?: string;
  value?: string;
  isRequired?: boolean;
  fetchRootProps?: boolean;
  placeholder?: string;
}

export default function UrlField({value, isRequired, name, placeholder}: Props) {
  const [Icon, setIcon] = useState<ElementType | undefined>(undefined);
  const [iconUrl, setIconUrl] = useState<string | undefined>(undefined);
  const [touched, setTouched] = useState(false);

  const [urlValue, setUrlValue] = useState(value || '');

  useEffect(() => {
    if (value) {
      setUrlValue(value);
    }
  }, [value]);

  const showIcon = !!Icon || !!iconUrl;

  const handleIconDisplay = debounce((inp: string) => {
    setIconUrl(undefined);
    setIcon(undefined);
    if (!inp.includes('.')) return;

    const domain = tryParseUrlDomain(inp);
    if (!domain) return;

    const icon = Object.entries(socialIconsMap).find(([k]) => domain === k)?.[1];
    if (icon) {
      setIcon(() => icon);
      setIconUrl(undefined);
    } else {
      setIcon(undefined);
      setIconUrl(`https://www.google.com/s2/favicons?sz=32&domain_url=${encodeURIComponent(domain)}`);
    }
  }, 100);

  return (
    <TextField
      data-adornment-start
      data-touched={touched ? true : undefined}
      isRequired={isRequired}
      aria-label="Url Field"
    >
      <div className="relative">
        <div className="[[data-invalid]_&]:text-error-500 absolute inset-y-0 left-4 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="32px"
              strokeDashoffset={showIcon ? '32px' : '0'}
              className={clsx('transition-all duration-150 ease-out', showIcon ? 'opacity-0 delay-200' : '')}
              d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="32px"
              strokeDashoffset={showIcon ? '-32px' : '0'}
              className={clsx('transition-all duration-150 ease-out', showIcon ? 'opacity-0 delay-200' : '')}
              d="m18.675 11.689 1.757-1.757a4.5 4.5 0 1 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
            />
          </svg>
        </div>
        <div
          className={clsx(
            'absolute inset-y-0 left-4 flex items-center',
            Icon ? 'animate-in fade-in zoom-in delay-200' : 'scale-0 transition-transform duration-150'
          )}
        >
          {Icon && <Icon className="h-4 w-4" />}
        </div>
        <div
          className={clsx(
            'absolute inset-y-0 left-4 flex items-center',
            iconUrl ? 'animate-in fade-in zoom-in delay-200' : 'scale-0 transition-transform duration-150'
          )}
        >
          {iconUrl && (
            <img
              alt=""
              src={iconUrl}
              className="h-4 w-4"
            />
          )}
        </div>
        <Input
          placeholder={placeholder}
          type="url"
          enterKeyHint="next"
          name={name}
          value={urlValue}
          onChange={(e) => {
            setUrlValue(e.target.value);
            handleIconDisplay(e.target.value);
          }}
          onBlur={() => setTouched(true)}
        />
      </div>
      <FieldError />
    </TextField>
  );
}
