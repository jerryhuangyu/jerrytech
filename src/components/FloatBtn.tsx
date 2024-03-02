'use client';

import { FloatButton, ConfigProvider } from 'antd';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ProductOutlined } from '@ant-design/icons';

const FloatBtn = () => {
  const [open, setOpen] = useState(false);
  const [primaryTooltip, setPrimaryTooltip] = useState('Open Menu');
  const router = useRouter();

  const handleOnclick = () => {
    setOpen((pre) => !pre);
    setPrimaryTooltip(`${open ? 'Open' : 'Close'} Menu`);
  };

  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#C785EC',
            colorFillContent: '#FFFFFF',
            colorBgElevated: '#F8EFFD'
          }
        }}
      >
        <FloatButton.Group
          type="primary"
          trigger="click"
          tooltip={primaryTooltip}
          open={open}
          onClick={handleOnclick}
          style={{ right: 24 }}
          icon={<ProductOutlined />}
        >
          <FloatButton
            tooltip="切換至中文"
            description="繁"
            style={{ fontWeight: 'bold' }}
            onClick={() => router.replace('/zh')}
          />
          <FloatButton
            tooltip="Select English"
            description="EN"
            onClick={() => router.replace('/en')}
          />
          <FloatButton.BackTop visibilityHeight={0} tooltip="Back to Top" />
        </FloatButton.Group>
      </ConfigProvider>
    </>
  );
};

export default FloatBtn;
