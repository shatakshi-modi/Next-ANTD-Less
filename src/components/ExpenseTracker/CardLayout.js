import React from 'react';
import { Card } from 'antd';
import CardStyle from '../../styles/Card.module.less'

const CardLayout = ({children}) => {
  return (
    <div className={CardStyle.siteCardBorderLessWrapper}>
      <Card className={CardStyle.innerCard}>
        {children}
      </Card>
    </div>
    
  );
};

export default CardLayout;
