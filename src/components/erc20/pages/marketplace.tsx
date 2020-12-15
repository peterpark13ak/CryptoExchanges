import React from 'react';

import { CheckMetamaskStateModalContainer } from '../../common/check_metamask_state_modal_container';
import { ColumnNarrow } from '../../common/column_narrow';
import { ColumnWide } from '../../common/column_wide';
import { Content } from '../common/content_wrapper';
import { BuySellContainer } from '../marketplace/buy_sell';
import { OrderBookTableContainer } from '../marketplace/order_book';
import { OrderHistoryContainer } from '../marketplace/order_history';
// import { OrderChartContainer } from '../marketplace/order_chart';
import { WalletBalanceContainer } from '../marketplace/wallet_balance';

class Marketplace extends React.PureComponent {
    public render = () => {
        return (
            <Content>
                <ColumnNarrow>
                    <WalletBalanceContainer />
                    <BuySellContainer />
                </ColumnNarrow>
                <ColumnNarrow>
                    <OrderBookTableContainer />
                </ColumnNarrow>
                <ColumnWide> 
                    {/*<OrderChartContainer />*/}
                    <OrderHistoryContainer />
                   
                </ColumnWide>
                <CheckMetamaskStateModalContainer />
            </Content>
        );
    };
}

export { Marketplace };
