import './SidebarItem.css';
import { AxisOptions, Chart } from 'react-charts';
import { useQuery } from 'react-query';
import { ApiResponse } from '../../../Chart/apiCalls/fetchPeriodData/types';
import { getFetchedPeriodData } from '../../../Chart/apiCalls/fetchPeriodData/fetchPeriodData';
import { ApiItem } from '../../apiCalls/fetchMostPopular/types';
import { timePickerItems } from '../../../Main/components/TimePicker/TimePicker';
import React, { useMemo } from 'react';

export const defaultTsym = 'USD';
export const defaultTSymId = '1111';

interface SidebarItemProps {
  el: ApiItem;
  onClick: () => void;
  isItemChecked: boolean;
  isPlusDay: boolean;
}

export const SidebarItem = ({ el, onClick, isItemChecked, isPlusDay }: SidebarItemProps) => {
  const { data: fetchedData } = useQuery<ApiResponse>(
    [el?.CoinInfo?.Id],
    getFetchedPeriodData(el?.CoinInfo?.Name, defaultTsym, timePickerItems[0].value)
  );

  const data =
      fetchedData?.Data?.map((point: any) => {
        return {
          data: [
            {
              primary: new Date(point.time).toISOString(),
              secondary: point.low,
            },
            {
              primary: new Date(point.time).toISOString(),
              secondary: point.open,
            },
            {
              primary: new Date(point.time).toISOString(),
              secondary: point.close,
            },
            {
              primary: new Date(point.time).toISOString(),
              secondary: point.high,
            },
          ],
          label: new Date(point.time).toString(),
        };
      }) ?? [];

  const primaryAxis: AxisOptions<typeof data[number]['data'][number]> = useMemo(
    () => ({
      getValue: (datum) => datum.primary,
      show: false,
    }),
    []
  );

  const secondaryAxes: AxisOptions<typeof data[number]['data'][number]>[] = useMemo(
    () => [
      {
        getValue: (datum) => datum.secondary,
        show: false,
        position: 'right',
      },
    ],
    []
  );

  return (
    <div className={`sidebarItem${isItemChecked ? ' checked' : ''}`} onClick={onClick}>
      <div className="sidebarItem__main">
        <div className="pair">
          {el.CoinInfo.Name} - {defaultTsym}
        </div>
        <div className="price">${Number(el.RAW.USD.PRICE).toFixed(2)}</div>
      </div>
      <div className="sidebarItem__chart">
        {fetchedData?.Data?.length ? (
          <Chart
            options={{
              data,
              secondaryAxes,
              primaryAxis,
              tooltip: false,
              primaryCursor: {
                show: false,
              },
              secondaryCursor: { show: false },
              getDatumStyle: (a) => ({
                stroke: isPlusDay ? 'url(#plusGradient)' : 'url(#minusGradient)',
                fill: isPlusDay ? 'url(#plusGradient)' : 'url(#minusGradient)',

              }),
              renderSVG: () => (
                  <>
                    <defs>
                      <linearGradient id="plusGradient" x1="0%" y1="0%" x2="0" y2="100%">
                        <stop offset="0%" stopColor="rgba(35, 174, 80, 1)" />
                        <stop offset="100%" stopColor="rgba(196, 196, 196, 0)" />
                      </linearGradient>
                    </defs>
                    <defs>
                      <linearGradient id="minusGradient" x1="0%" y1="0%" x2="0" y2="100%">
                        <stop offset="0%" stopColor="rgba(186, 65, 56, 1)" />
                        <stop offset="100%" stopColor="rgba(196, 196, 196, 0)" />
                      </linearGradient>
                    </defs>
                  </>
              )
            }}
          />
        ) : null}
      </div>
    </div>
  );
};