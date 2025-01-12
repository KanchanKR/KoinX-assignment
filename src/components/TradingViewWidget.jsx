/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef(null);

  useEffect(() => {
    if (!container.current) return;

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;

    const scriptContent = JSON.stringify({
      "autosize": true,
      "symbol": "CRYPTO:BTCUSD",
      "timezone": "Etc/UTC",
      "theme": "light",
      "style": "2",
      "locale": "en",
      "enable_publishing": false,
      "hide_top_toolbar": true,
      "hide_legend": true,
      "range": "7D", // Set the range to 7D for the last 7 days
      "save_image": false,
      "calendar": false,
      "hide_volume": true,
      "support_host": "https://www.tradingview.com",
      "studies": [
        {
          "id": "RSI"
        }
      ],
      "width": "100%",
      "height": "100%",
      "chart_layout": {
        "backgroundColor": "#FFFFFF",
        "grid": {
          "color": "#eaeaea"
        }
      },
      "scales": {
        "left": {
          "visible": true, // Ensure the left scale is visible
          "currency": "USD" // Set currency to USD
        }
      }
    });

    script.innerHTML = scriptContent;
    container.current.appendChild(script);

    return () => {
      if (container.current && script.parentNode) {
        container.current.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      className="tradingview-widget-container"
      ref={container}
      style={{ height: "100%", width: "100%" }}
    ></div>
  );
}

export default memo(TradingViewWidget);
