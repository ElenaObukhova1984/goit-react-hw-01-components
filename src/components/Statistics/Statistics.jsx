import PropTypes from "prop-types";
import { StatisticsContainer,StatisticsTitle,StatisticsList,StatisticsItem } from "./Statistics.styled";

export const Statistics = ({ title, stats }) => {
    return (
        <StatisticsContainer>
            <StatisticsTitle>{title}</StatisticsTitle>

            <StatisticsList>
                {stats.map(data => (
                    <StatisticsItem
                        key={data.id}>
                        <span>{data.label} </span>
                        <span>{data.percentage}%</span>
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