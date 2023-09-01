/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { Switch } from '../ui/switch';
import { LoggedContext } from '@/contexts/LoggedContext';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';

export default function PolicyComponent({ canChoose, setOpen }: any) {
  const { consent, consentTypes } = useContext(LoggedContext);
  const [isSearching, setIsSearching] = React.useState(false);
  const [policyTypes, setPolicyTypes] = React.useState<any>([]);

  useEffect(() => {
    if (policyTypes.length > 0) return;
    setPolicyTypes(consentTypes.hook.data);
  }, []);

  return (
    <div className="flex flex-col gap-4 py-8 px-4">
      <div>
        <p className="font-bold text-[1.25rem]">Cookie settings</p>
        <p className="text-small font-[300]">
          Manage your cookie settings here.
        </p>
      </div>

      <div className="overflow-y-auto flex flex-col gap-4">
        {policyTypes &&
          policyTypes.length > 0 &&
          policyTypes.map((e: any, i: number) => (
            <EachOption
              key={`checkbox_${i}`}
              name={e.name}
              value={canChoose ? consent.hook.consentChoice[i] : true}
              canChoose={canChoose}
              onChange={(e: any) => {
                consent.hook.setConsentChoice((prevState: any) => {
                  const newState = [...prevState];
                  newState[i] = e;
                  return newState;
                });
              }}
            />
          ))}
      </div>

      <button
        type="button"
        disabled={isSearching}
        onClick={() => {
          setOpen(false);
          const objectToUpdateDb = [
            consentTypes.hook.data.map((e: any, i: number) => {
              return {
                userId: +Cookies.get('auth')!,
                consentId: e.id,
                value: consent.hook.consentChoice[i] ? 1 : 0,
              };
            }),
          ];
          const objectToUpdateLocal = consentTypes.hook.data.map(
            (e: any, i: number) => {
              return {
                id: e.id || 0,
                consentType: {
                  name: e.name,
                },
                value: consent.hook.consentChoice[i] ? 1 : 0,
              };
            }
          );

          console.log(objectToUpdateLocal);

          consent.hook.setData(objectToUpdateLocal);
          consent.setCache(objectToUpdateLocal, true);

          consent
            .postHttp('many', objectToUpdateDb)
            .catch((err) => {
              toast.error(err.data || err.message);
            })
            .finally(() => {
              setIsSearching(false);
            });
        }}
        className="rounded-normal border bg-black text-white p-2 mt-4"
      >
        Save preferences
      </button>
    </div>
  );
}

const EachOption = ({
  name,
  value,
  onChange,
  canChoose,
}: {
  name: string;
  value: any;
  onChange: any;
  canChoose: boolean;
}) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex gap-2">
        <p className="font-semibold text-small w-11/12">{name}</p>
        {canChoose ? (
          <Switch
            value={value}
            checked={value}
            onCheckedChange={(e) => {
              onChange(e);
            }}
          />
        ) : (
          <Switch
            disabled={true}
            checked={true}
            value={value}
          />
        )}
      </div>
    </div>
  );
};
