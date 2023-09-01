'use client';

import Container from '@/components/core/Container';
import InputContainer from '@/components/core/InputContainer';
import WhiteBox from '@/components/core/Whitebox';
import Button from '@/components/interactiveComponents/Button';
import { CnnCombobox } from '@/components/interactiveComponents/Combobox';
import { CnnDatePicker } from '@/components/interactiveComponents/DatePicker';
import Title from '@/components/text/Title';
import { LoggedContext } from '@/contexts/LoggedContext';
import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import * as CnnModal from '@/components/nonInteractiveComponents/Modal';
import PolicyComponent from '@/components/applicationComponents/PolicyComponent';
import Cookies from 'js-cookie';

export default function Home() {
  const { consent, consentTypes, countries, states, users, auth } =
    useContext(LoggedContext);

  const [open, setOpen] = useState(true);

  const [statesToShow, setStatesToShow] = useState<any>([]);
  const [canChoose, setCanChoose] = useState<any>(false);

  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (countries.hook.selected) {
      const statesFiltered = states.hook.data.filter(
        (state: any) => state.countryId === +countries.hook.selected
      );
      setStatesToShow(statesFiltered);

      return () => {
        setStatesToShow([]);
      };
    }
  }, [countries.hook.selected, states.hook.data]);

  const handleSearch = () => {
    const data = {
      state: states.hook.data.find((e: any) => {
        return e.id === +states.hook.selected;
      }),
    };

    const { shortName } = data.state;

    const canChoose = consent.statesThatCanChoose.includes(shortName);
    setCanChoose(canChoose);

    if (!canChoose) {
      toast.success('Your consent preferences are defined to true by default.');
      const objectToUpdateDb = [
        consentTypes.hook.data.map((e: any) => {
          return {
            userId: +Cookies.get('auth')!,
            consentId: e.id,
            value: 1,
          };
        }),
      ];
      setIsSearching(true);
      const objectToUpdateLocal = consentTypes.hook.data.map(
        (e: any, i: number) => {
          return {
            id: e.id || 0,
            consentType: {
              name: e.name,
            },
            value: 1,
          };
        }
      );
      consent.hook.setData(objectToUpdateLocal);
      consent.setCache(objectToUpdateLocal);
      consent
        .postHttp('many', objectToUpdateDb)
        .catch((err) => {
          toast.error(err.data || err.message);
        })
        .finally(() => {
          setIsSearching(false);
        });
    }
  };
  return (
    <Container>
      <Title title="Welcome!" />
      <div className="flex flex-col justify-end w-full gap-4">
        <WhiteBox>
          <div
            className="flex w-full flex-col gap-4
      xl:flex-row"
          >
            <InputContainer
              label="Country"
              mergeClass="xl:max-w-[50%]"
            >
              <CnnCombobox
                options={countries.hook.data}
                value={countries.hook.selected}
                labelTag="name"
                valueTag="id"
                setValue={(e) => {
                  countries.hook.setSelected(e);
                }}
              />
            </InputContainer>
            <InputContainer
              label="State"
              mergeClass="xl:max-w-[50%]"
            >
              <CnnCombobox
                options={statesToShow}
                disabled={statesToShow.length === 0}
                value={states.hook.selected}
                labelTag="name"
                valueTag="id"
                setValue={(e) => {
                  states.hook.setSelected(e);
                }}
              />
            </InputContainer>
          </div>
          <div className="w-full flex items-end justify-end">
            <div className="flex w-1/2 items-center justify-end gap-4">
              {canChoose ? (
                <CnnModal.Modal
                  open={open}
                  openChange={setOpen}
                >
                  <CnnModal.ModalTrigger>
                    <Button
                      loading={isSearching}
                      disabled={states.hook.selected === ''}
                      label="Send"
                      mergeClass="px-2 w-full md:px-0 xl:w-1/4"
                      onClick={() => {
                        handleSearch();
                      }}
                    />
                  </CnnModal.ModalTrigger>
                  <CnnModal.ModalContent mergeClasses="right-0 top-0 max-w-[20rem] fixed mt-[6rem] py-0 rounded-lg px-4">
                    <PolicyComponent
                      canChoose={canChoose}
                      setOpen={setOpen}
                    />
                  </CnnModal.ModalContent>
                </CnnModal.Modal>
              ) : (
                <Button
                  loading={isSearching}
                  disabled={states.hook.selected === ''}
                  label="Send"
                  mergeClass="px-2 w-full md:px-0 xl:w-1/4"
                  onClick={() => {
                    handleSearch();
                  }}
                />
              )}
            </div>
          </div>
        </WhiteBox>
      </div>
    </Container>
  );
}
