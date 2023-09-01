'use client';

import Container from '@/components/core/Container';
import WhiteBox from '@/components/core/Whitebox';
import Table from '@/components/nonInteractiveComponents/Table';
import Title from '@/components/text/Title';
import { LoggedContext } from '@/contexts/LoggedContext';
import { useContext, useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import * as CnnAlert from '@/components/interactiveComponents/Alert';

export default function Consult() {
  const { consent } = useContext(LoggedContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log('entered - ', consent.hook.data);
    setData(consent.hook.data);
  }, [consent.hook.data]);
  return (
    <Container>
      <Title title="Consent Preferences" />
      <div className="flex flex-col justify-end w-full gap-4">
        <WhiteBox>
          <Table
            title="Consent Preferences"
            headers={['Consent name', 'Accepted']}
            data={[
              data &&
                data.length > 0 &&
                data.map((e: any) => [
                  e.id,
                  e.consentType.name,
                  e.value === 1 ? 'Yes' : 'No',
                ]),
            ]}
          />
          <div className="ml-auto">
            <CnnAlert.Alert>
              <CnnAlert.AlertTrigger>
                {data && data.length > 0 ? (
                  <AiFillDelete className="w-6 h-6 text-primary" />
                ) : (
                  <></>
                )}
              </CnnAlert.AlertTrigger>
              <CnnAlert.AlertContent>
                <CnnAlert.AlertHeader />
                <CnnAlert.AlertFooter
                  confirmAction={() => {
                    const dataToExclude = consent.hook.data;
                    console.log(dataToExclude);
                    dataToExclude.forEach((element: any) => {
                      consent.postHttp('delete', {
                        id: element.id,
                      });
                    });
                    consent.hook.setData([]);
                    consent.setCache([]);
                  }}
                />
              </CnnAlert.AlertContent>
            </CnnAlert.Alert>
          </div>
        </WhiteBox>
      </div>
    </Container>
  );
}
