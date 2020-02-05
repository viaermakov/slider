import * as React from 'react';

export const useAnimationFrame = (callback: Function): void => {
  const requestRef = React.useRef<number>(0);
  const previousTimeRef = React.useRef<number>(0);

  const animate = React.useCallback(
    (time: number): void => {
      if (previousTimeRef.current !== undefined) {
        callback();
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    },
    [callback],
  );

  React.useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [animate]);
};

export const useLifeProcess = (callback: Function, deps: Array): void => {
  const [time, countries] = deps;
  const newCountries = countries;

  React.useEffect(() => {
    // if (time % 50 !== 0) {
    //   return;
    // }
    const generateStyles = (data: ICountry[]): void => {
      data.forEach((country: ICountry): void => {
        if (!country.code || !country.code) {
          return;
        }
        const currentPath = document.querySelector(`.${country.code}`) as HTMLElement;
        if (!currentPath) {
          return;
        }
        currentPath.style.fill = country ? country.color : '';
      });
    };

    if (
      newCountries.filter(item => item.independent === false).length ===
      newCountries.length - 1
    ) {
      console.log('=1==');
      return;
    }

    for (const country of newCountries) {
      const attack = getRandom(1, 10);
      const defendedCountry = getRandom(0, newCountries.length - 1);

      const defPower = newCountries[defendedCountry].power || 10;
      const defProtectorate = newCountries[defendedCountry].protectorate || [];

      if (country.name === newCountries[defendedCountry].name) {
        continue;
      }
      if (!newCountries[defendedCountry].independent || !country.independent) {
        continue;
      }

      if (attack > defPower) {
        if (defProtectorate.length > 0) {
          const indexLast = newCountries.findIndex(item => item.name === defProtectorate[last]);
          const last = defProtectorate.length - 1;
          country.protectorate = [...country.protectorate, defProtectorate[last]];
          newCountries[indexLast].independent = false;

          newCountries[indexLast].color = country.color;
          newCountries[defendedCountry].protectorate.splice(last, 1);
          continue;
        }
        newCountries[defendedCountry].color = country.color;
        country.protectorate = [...country.protectorate, newCountries[defendedCountry].name];
        newCountries[defendedCountry].independent = false;
      } else {
        if (country.protectorate.length > 0) {
          const last = country.protectorate.length - 1;
          const indexLast = newCountries.findIndex(
            item => item.name === country.protectorate[last],
          );

          newCountries[defendedCountry].protectorate = [
            ...defProtectorate,
            country.protectorate[last],
          ];
          newCountries[indexLast].color = newCountries[defendedCountry].color;

          country.protectorate.splice(last, 1);
          continue;
        }
        country.color = newCountries[defendedCountry].color;
        newCountries[defendedCountry].protectorate = [...defProtectorate, country.name];
        country.independent = false;
      }
    }

    const topCountries = [...newCountries];
    topCountries.sort((a, b) => b.protectorate.length - a.protectorate.length);

    generateStyles(newCountries);
  }, [countries, newCountries, time]);

  return newCountries;
};
