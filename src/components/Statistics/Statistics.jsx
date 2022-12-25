import PropTypes from "prop-types";
import { StatisticsContainer,StatisticsTitle,StatisticsList,StatisticsItem,StatisticLabel,StatisticPerc } from "./Statistics.styled";

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsContainer>
      {title && <StatisticsTitle> { title }</StatisticsTitle>}

            <StatisticsList>
                {stats.map(data => (
                    <StatisticsItem
                        key={data.id}>
                        <StatisticLabel>{data.label} </StatisticLabel>
                        <StatisticPerc>{data.percentage}%</StatisticPerc>
                    </StatisticsItem>
                ))}
            </StatisticsList>
        </StatisticsContainer>
    )
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};