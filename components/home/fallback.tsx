import DataTable from '../DataTable';

const fallbackRows = Array.from({ length: 6 }, (_, index) => index);

const CoinOverviewFallback = () => {
  return (
    <div id="coin-overview-fallback" aria-busy="true">
      <div className="header">
        <div className="skeleton header-image" />
        <div className="info">
          <div className="skeleton header-line-sm" />
          <div className="skeleton header-line-lg" />
        </div>
      </div>
      <div className="chart">
        <div className="skeleton chart-skeleton" />
      </div>
    </div>
  );
};

const trendingColumns: DataTableColumn<number>[] = [
  {
    header: 'Name',
    cell: () => (
      <div className="name-link">
        <div className="skeleton name-image" />
        <div className="skeleton name-line" />
      </div>
    ),
  },
  {
    header: '24h change',
    cell: () => (
      <div className="price-change">
        <div className="skeleton change-icon" />
        <div className="skeleton change-line" />
      </div>
    ),
  },
  {
    header: 'Price',
    cell: () => <div className="skeleton price-line" />,
  },
];

const TrendingCoinsFallback = () => {
  return (
    <div id="trending-coins-fallback" aria-busy="true">
      <h4>Trending Coins</h4>
      <DataTable
        data={fallbackRows}
        columns={trendingColumns}
        rowKey={(row) => row}
        tableClassName="trending-coins-table"
        headerClassName="py-2!"
      />
    </div>
  );
};

export { CoinOverviewFallback, TrendingCoinsFallback };
