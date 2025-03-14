import  { useEffect, useRef } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5wc from "@amcharts/amcharts5/wc";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const WordCloudChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Create root element
    const root = am5.Root.new(chartRef.current);

    // Set themes
    root.setThemes([am5themes_Animated.new(root)]);

    // Add wrapper container
    const container = root.container.children.push(am5.Container.new(root, {
      width: am5.percent(100),
      height: am5.percent(100),
      layout: root.verticalLayout
    }));


    // Add series
    const series = container.children.push(am5wc.WordCloud.new(root, {
      categoryField: "tag",
      valueField: "weight",
      calculateAggregates: true
    }));

    // Set up heat rules
    series.set("heatRules", [{
      target: series.labels.template,
      dataField: "value",
      min: am5.color(0xFFD4C2),
      max: am5.color(0xFF621F),
      key: "fill"
    }]);

    // Configure labels
    series.labels.template.setAll({
      paddingTop: 6,
      paddingBottom: 5,
      paddingLeft: 8,
      paddingRight: 8,
      fontFamily: "Courier New",
      cursorOverStyle: "pointer"
    });

    // Add click event on words https://stackoverflow.com/questions/tagged/
    series.labels.template.events.on("click", function(ev) {
      const category = ev.target.dataItem.get("category");
      window.open("#" + encodeURIComponent(category));
    });

    // Set data
    series.data.setAll([
      { tag: 'JavaScript', weight: 64.96 },
      { tag: 'React', weight: 64.96 },
      { tag: 'HTML/CSS', weight: 56.07 },
      { tag: 'Python', weight: 48.24 },
      { tag: 'SQL', weight: 27.08 },
      { tag: 'Java', weight: 35.35 },
      { tag: 'Node.js', weight: 33.91 },
      { tag: 'TypeScript', weight: 30.19 },
      { tag: 'Next', weight: 27.86 },
      { tag: 'Figma', weight: 28.32 },
      { tag: 'Spline', weight: 27.13 },
      { tag: 'Photoshop', weight: 24.31 },
      { tag: 'PHP', weight: 21.98 },
      { tag: 'C', weight: 21.01 },
      { tag: 'PowerShell', weight: 10.75 },
      { tag: 'Git', weight: 30.32 },
      { tag: 'Firebase', weight: 17.03 },
      { tag: 'Solidity', weight: 15.0 },
      { tag: 'EthersJs', weight: 17.03 },
      { tag: 'ThreeJs', weight: 37.03 },
    ])

    return () => {
      root.dispose(); // Clean up on unmount
    };
  }, []);

  return (
    <div className='w-[90%] lg:w-[95%] mx-auto'>
      <div className='reveal2'>
        <p className='md:text-4xl text-3xl font-bold text-teal-900 text-center'>
          Skills
        </p>
      </div>
      <div className='reveal3 w-full h-96' ref={chartRef}></div>
    </div> // Tailwind styles
  )
};

export default WordCloudChart;
