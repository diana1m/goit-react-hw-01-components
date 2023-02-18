import PropTypes from 'prop-types';
import { Section, Title, List, Item } from "./Statistics.styled";

export const Statistics = ({title, stats})=>{
    return(
        <Section>
            <Title>{title}</Title>
            <List>
                {stats.map(item=>(
                    <Item key = {item.id} style={{backgroundColor: getRandomHexColor()}}>
                        <span>{item.label}</span>
                        <span>{item.percentage}%</span>
                    </Item>
                ))}
            </List>
        </Section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }).isRequired,
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }