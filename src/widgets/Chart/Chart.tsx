import React, { useMemo } from 'react';
import { AxisOptions, Chart as CoreChart } from 'react-charts';
import { ResizableBox } from './ResizableBox';
import { useQuery } from 'react-query';
import { ApiResponse } from './apiCalls/fetchPeriodData/types';
import { getFetchedPeriodData } from './apiCalls/fetchPeriodData/fetchPeriodData';
import { Loader } from '../../components/Loader';
import './Chart.css';
import { DefaultSelectItem } from '../../types';

interface ChartProps {
  from: string;
  to: string;
  time: DefaultSelectItem;
}

export const Chart = ({ from, to, time }: ChartProps) => {
  const { data: fetchedData } = useQuery<ApiResponse>(
    [from, to, time?.value],
    getFetchedPeriodData(from, to, time?.value)
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
      stacked: true,
      show: false,
    }),
    []
  );

  const secondaryAxes: AxisOptions<typeof data[number]['data'][number]>[] = useMemo(
    () => [
      {
        getValue: (datum) => datum.secondary,
        stacked: true,
        position: 'right',
        // @ts-ignore
        stackOffset: (series: [number, number][][]) => {
          series?.forEach((item: [number, number][]) => {
            if (Array.isArray(item)) {
              item[1][0] = item[0][1];
              item[2][0] = item[1][1];
              item[3][0] = item[2][1];
              item.shift();
            }
          });
        },
        elementType: 'bar',
      },
    ],
    []
  );
  return (
    <div className="chart__wrapper">
      {fetchedData?.Data?.length ? (
        <ResizableBox>
          <CoreChart
            options={{
              data,
              primaryAxis,
              tooltip: false,
              secondaryAxes,
              getDatumStyle: (a) => ({
                fill: a?.index !== 1 ? 'rgba(171, 168, 168, 1)' : 'url(#gradient)',
                width: a?.index !== 1 ? 1 : 12,
                transform: a?.index !== 1 ? 'translate(5px, 0)' : 'inherit',
                rx: 4,
              }),
              primaryCursor: {
                show: false,
              },
              secondaryCursor: { show: false },
              renderSVG: () => (
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="0" y2="100%">
                    <stop offset="0%" stopColor="rgba(60, 111, 234, 1)" />
                    <stop offset="100%" stopColor="rgba(25, 57, 205, 1)" />
                  </linearGradient>
                </defs>
              ),
            }}
          />
        </ResizableBox>
      ) : (
        <div className="chart__loader">
          <Loader />
        </div>
      )}
    </div>
  );
};