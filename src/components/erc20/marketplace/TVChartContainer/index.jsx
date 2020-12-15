import * as React from "react";
// import "./index.css";
import Datafeed from "./api/";
import * as $ from "jquery";

function getLanguageFromURL() {
  const regex = new RegExp("[\\?&]lang=([^&#]*)");
  const results = regex.exec(window.location.search);
  return results === null
    ? null
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

export class TVChartContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      symbol: "",
      interval: "15",
      containerId: "tv_chart_container",
      libraryPath: "/charting_library/",
      chartsStorageUrl: "https://saveload.tradingview.com",
      chartsStorageApiVersion: "1.1",
      clientId: "tradingview.com",
      userId: "public_user_id",
      fullscreen: false,
      autosize: true,
      studiesOverrides: {},
      backColor: "#011625",
      borderColor: "#0a2133"
    };
    this.widget = undefined;
  }

  getTimezoneName() {
    var tmSummer = new Date(Date.UTC(2005, 6, 30, 0, 0, 0, 0));
    var so = -1 * tmSummer.getTimezoneOffset();
    var tmWinter = new Date(Date.UTC(2005, 12, 30, 0, 0, 0, 0));
    var wo = -1 * tmWinter.getTimezoneOffset();
    if (-600 === so && -600 === wo) return "Pacific/Honolulu";
    if (-420 === so && -420 === wo) return "America/Vancouver";
    if (-360 === so && -360 === wo) return "America/El_Salvador";
    if (-300 === so && -300 === wo) return "America/Mexico_City";
    if (-240 === so && -240 === wo) return "America/Toronto";
    if (-180 === so && -180 === wo) return "Europe/Athens";
    if (60 === so && 60 === wo) return "Europe/London";
    if (120 === so && 120 === wo) return "Europe/Madrid";
    if (180 === so && 180 === wo) return "Europe/Athens";
    if (240 === so && 240 === wo) return "Asia/Dubai";
    if (270 === so && 270 === wo) return "Asia/Tehran";
    if (300 === so && 300 === wo) return "Asia/Ashkhabad";
    if (330 === so && 330 === wo) return "Asia/Kolkata";
    if (360 === so && 360 === wo) return "Asia/Almaty";
    if (420 === so && 420 === wo) return "Asia/Bangkok";
    if (480 === so && 480 === wo) return "Asia/Shanghai";
    if (540 === so && 540 === wo) return "Asia/Seoul";
    if (570 === so && 570 === wo) return "Australia/Adelaide";
    if (600 === so && 600 === wo) return "Australia/Brisbane";
    if (720 === so && 720 === wo) return "Pacific/Auckland";
    if (765 === so && 765 === wo) return "Pacific/Chatham";
    if (780 === so && 780 === wo) return "Pacific/Fakaofo";
    return "US/Mountain";
  }

  componentDidMount() {
    // this.componentWillReceiveProps(this.props);
    let inter = setInterval(() => {
      if (this.state.symbol !== "") {
        clearInterval(inter);
        const widgetOptions = {
          autosize: true,
          fullscreen: false,
          height: "100%",
          symbol: this.state.symbol,
          interval: this.state.interval,
          container_id: "tv_chart_container",
          toolbar_bg: this.state.backColor,
          //	BEWARE: no trailing slash is expected in feed URL
          datafeed: Datafeed,
          library_path: "/charting_library/",
          locale: "en",
          //	Regression Trend-related functionality is not implemented yet, so it's hidden for a while
          drawings_access: {
            type: "black",
            tools: [{ name: "Regression Trend" }]
          },
          charts_storage_url: "http://saveload.tradingview.com",
          charts_storage_api_version: "1.1",
          client_id: "tradingview.com",
          user_id: "public_user_id",
          disabled_features: [
            "save_chart_properties_to_local_storage",
            "volume_force_overlay",
            //搜索
            "header_symbol_search",
            //按任意键启用搜索
            "symbol_search_hot_key",
            //切换时间周期空间
            //"header_resolutions",
            //是否支持输入自定义时间
            //"header_interval_dialog_button",
            //"show_interval_dialog_on_key_press",
            //图表类型
            //"header_chart_type",
            //图表指标
            //"header_indicators",
            //添加另一币种做比较
            //"header_compare",
            //撤销,重做
            //"header_undo_redo",
            //隐藏，保存按钮
            "header_saveload",
            //"header_screenshot",
            //"header_fullscreen_button",
            "timeframes_toolbar",
            "use_localstorage_for_settings",
            "display_market_status"
          ],
          enabled_features: [
            //"move_logo_to_main_pane",
            //"study_templates",
            "side_toolbar_in_fullscreen_mode",
            "hide_left_toolbar_by_default"
          ],

          overrides: {
            "symbolWatermarkProperties.color": "rgba(0,0,0, 0)",
            "paneProperties.background": this.state.backColor,
            "paneProperties.vertGridProperties.color": this.state.backColor,
            "paneProperties.horzGridProperties.color": this.state.backColor,
            "paneProperties.crossHairProperties.color": "#DDDDDD",
            "paneProperties.crossHairProperties.style": 2,
            "mainSeriesProperties.style": 9,
            "mainSeriesProperties.showCountdown": false,
            "scalesProperties.showSeriesLastValue": true,
            "mainSeriesProperties.visible": false,
            "mainSeriesProperties.showPriceLine": false,
            "mainSeriesProperties.priceLineWidth": 1,
            "mainSeriesProperties.lockScale": false,
            "mainSeriesProperties.minTick": "default",
            "mainSeriesProperties.extendedHours": false,
            volumePaneSize: "tiny",
            timezone: this.getTimezoneName(),
            "paneProperties.topMargin": 15,
            "paneProperties.bottomMargin": 5,
            "paneProperties.leftAxisProperties.autoScale": true,
            "paneProperties.leftAxisProperties.autoScaleDisabled": false,
            "paneProperties.leftAxisProperties.percentage": false,
            "paneProperties.leftAxisProperties.percentageDisabled": false,
            "paneProperties.leftAxisProperties.log": false,
            "paneProperties.leftAxisProperties.logDisabled": false,
            "paneProperties.leftAxisProperties.alignLabels": true,
            // "paneProperties.legendProperties.showStudyArguments": true,
            "paneProperties.legendProperties.showStudyTitles": true,
            "paneProperties.legendProperties.showStudyValues": true,
            "paneProperties.legendProperties.showSeriesTitle": true,
            "paneProperties.legendProperties.showSeriesOHLC": true,
            "scalesProperties.showLeftScale": false,
            "scalesProperties.showRightScale": true,
            "scalesProperties.backgroundColor": "#2b2b2b",
            "scalesProperties.lineColor": this.state.borderColor,
            "scalesProperties.textColor": "#8f98ad",
            "scalesProperties.scaleSeriesOnly": false,
            "mainSeriesProperties.priceAxisProperties.autoScale": true,
            "mainSeriesProperties.priceAxisProperties.autoScaleDisabled": false,
            "mainSeriesProperties.priceAxisProperties.percentage": false,
            "mainSeriesProperties.priceAxisProperties.percentageDisabled": false,
            "mainSeriesProperties.priceAxisProperties.log": false,
            "mainSeriesProperties.priceAxisProperties.logDisabled": false,
            "mainSeriesProperties.candleStyle.upColor": "#3cb458",
            "mainSeriesProperties.candleStyle.downColor": "#e94d4d",
            "mainSeriesProperties.candleStyle.drawWick": true,
            "mainSeriesProperties.candleStyle.drawBorder": true,
            "mainSeriesProperties.candleStyle.borderColor": "#3cb458",
            "mainSeriesProperties.candleStyle.borderUpColor": "#3cb458",
            "mainSeriesProperties.candleStyle.borderDownColor": "#e94d4d",
            "mainSeriesProperties.candleStyle.wickColor": "#737375",
            "mainSeriesProperties.candleStyle.wickUpColor": "#3cb458",
            "mainSeriesProperties.candleStyle.wickDownColor": "#e94d4d",
            "mainSeriesProperties.candleStyle.barColorsOnPrevClose": false,
            "mainSeriesProperties.hollowCandleStyle.upColor": "#3cb458",
            "mainSeriesProperties.hollowCandleStyle.downColor": "#e94d4d",
            "mainSeriesProperties.hollowCandleStyle.drawWick": true,
            "mainSeriesProperties.hollowCandleStyle.drawBorder": true,
            "mainSeriesProperties.hollowCandleStyle.borderColor": "#3cb458",
            "mainSeriesProperties.hollowCandleStyle.borderUpColor": "#3cb458",
            "mainSeriesProperties.hollowCandleStyle.borderDownColor": "#e94d4d",
            "mainSeriesProperties.hollowCandleStyle.wickColor": "#737375",
            "mainSeriesProperties.hollowCandleStyle.wickUpColor": "#3cb458",
            "mainSeriesProperties.hollowCandleStyle.wickDownColor": "#e94d4d",
            "mainSeriesProperties.haStyle.upColor": "#3cb458",
            "mainSeriesProperties.haStyle.downColor": "#e94d4d",
            "mainSeriesProperties.haStyle.drawWick": true,
            "mainSeriesProperties.haStyle.drawBorder": true,
            "mainSeriesProperties.haStyle.borderColor": "#3cb458",
            "mainSeriesProperties.haStyle.borderUpColor": "#3cb458",
            "mainSeriesProperties.haStyle.borderDownColor": "#e94d4d",
            "mainSeriesProperties.haStyle.wickColor": "#737375",
            "mainSeriesProperties.haStyle.wickUpColor": "#3cb458",
            "mainSeriesProperties.haStyle.wickDownColor": "#e94d4d",
            "mainSeriesProperties.haStyle.barColorsOnPrevClose": false,
            "mainSeriesProperties.barStyle.upColor": "#3cb458",
            "mainSeriesProperties.barStyle.downColor": "#e94d4d",
            "mainSeriesProperties.barStyle.barColorsOnPrevClose": false,
            "mainSeriesProperties.barStyle.dontDrawOpen": false,
            "mainSeriesProperties.lineStyle.color": "#0cbef3",
            "mainSeriesProperties.lineStyle.linestyle": 0,
            "mainSeriesProperties.lineStyle.linewidth": 1,
            "mainSeriesProperties.lineStyle.priceSource": "close",
            "mainSeriesProperties.areaStyle.color1": "#0cbef3",
            "mainSeriesProperties.areaStyle.color2": "#0098c4",
            "mainSeriesProperties.areaStyle.linecolor": "#0cbef3",
            "mainSeriesProperties.areaStyle.linestyle": 0,
            "mainSeriesProperties.areaStyle.linewidth": 1,
            "mainSeriesProperties.areaStyle.priceSource": "close",
            "mainSeriesProperties.areaStyle.transparency": 80
          },
          custom_css_url: "chart.css?v2",
          studies_overrides: {
            "MACD.Histogram.linewidth": 4,
            "MACD.MACD.color": "#EEEEEE",
            "MACD.Signal.color": "#EEEE00",
            "MACD.MACD.linewidth": 1.3,
            "MACD.Signal.linewidth": 1.3,
            "MA.plot.color": "#CCDDDD",
            "SMMA.plot.color": "#DDDD99",
            "MA.plot.linewidth": 1.3,
            "SMMA.plot.linewidth": 1.3
          },
          favorites: {
            chartTypes: ["Area", "Line"]
          }
        };

        // console.log(widgetOptions);

        this.widget = new window.TradingView.widget(widgetOptions);
        this.widget.onChartReady(() => {
          // console.log("Chart has loaded!");
          $(".chartBox").removeClass("loading");
        });
      }
    }, 100);
  }

  async componentWillReceiveProps(nextProps) {
    let base = 'derc20';
    let asset = 'weth';
    // let base = nextProps.props.props.params.base.toUpperCase();
    // let asset = nextProps.props.props.params.asset.toUpperCase();
    this.setState(
      {
        symbol: base + "/" + asset
      },
      () => {
        let inter = setInterval(() => {
          if (this.widget !== undefined) {
            clearInterval(inter);
            this.widget.onChartReady(() => {
              this.widget.chart().setSymbol(this.state.symbol, () => {});
              $(".chartBox").removeClass("loading");
            });
          }
        }, 500);
      }
    );
  }

  render() {
    return (
      <div
        id={this.state.containerId}
        className={"TVChartContainer"}
        style={{ height: "200%", overflow: "hidden", borderRadius: "5px" }}
      />
    );
  }
}
