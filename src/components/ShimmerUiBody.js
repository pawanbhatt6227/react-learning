const ShimmerUiBody = () => {
  const cards = [];
  for (let i = 0; i < 5; i++) {
    cards.push(
      <div key={i} className="shimmer-card">
        Card
      </div>,
    );
  }

  return <div className="shimmer-container">{cards}</div>;
};

export default ShimmerUiBody;
