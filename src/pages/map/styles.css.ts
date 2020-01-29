import { countries } from './countries';
import styled from 'styled-components';

export const Container = styled.div`
  margin: 2rem 20%;

  svg {
    fill: #383d45;
  }

  path {
    &:hover {
      fill: red;
    }
  }
`;

export const Tooltip = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: 4px 8px;
  color: #000;
  border-radius: 4px;
  width: 120px;
  background: #545456;
  color: #eee;
`;

export const Title = styled.span`
  position: relative;
  font-size: 1rem;
`;
export const Text = styled.span`
  position: relative;

  font-size: 0.9rem;
`;

export const Svg = styled.svg``;

// export const Ab = styled.div`
//   ${({ data }) => generateCSSClasses(data)};
// `;

// const generateCSSClasses = data => {
//   console.log(data);
//   console.log(Object.keys(data).length);

//   if (!Object.keys(data).length) {
//     return;
//   }
//   return Object.keys(data).map(country => {
//     const countriesOb = countries.reduce((acc, item) => {
//       acc[item.name] = item;
//       return acc;
//     }, {});

//     if (!countriesOb[country] || !countriesOb[country].code) {
//       return '';
//     }
//     console.log(`
//     #${countriesOb[country].code}: {
//       fill: rgba(247, 22, 67, ${data[country] ? data[country].gradation : 1})
//     }
//  `);
//     return `
//         #${countriesOb[country].code}: {
//           fill: rgba(247, 22, 67, ${data[country] ? data[country].gradation : 1})
//         }
//      `;
//   });
// };
