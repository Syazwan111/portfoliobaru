const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");


module.exports = {
  darkMode: "class",
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx}"
  
  ],
  safelist: ["font-bold"], 
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '1024px',
      // => @media (min-width: 1024px) { ... }

      'lg': '1280px',
      // => @media (min-width: 1280px) { ... }

      'xl': '1400px',
      // => @media (min-width: 1400px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        current: "currentColor",
        green: colors.emerald,
        yellow: colors.amber,
        purple: colors.violet,
        gray: colors.neutral,
      },
      backgroundImage: {
         'hero': "url('/images/sc.jpeg')",
         'hero1': "url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')",
      },
      spacing: {
        'screen-2': '2vh',
        'screen-3': '3vh',
        'screen-4': '4vh',
        'screen-5': '5vh',
        'screen-10': '10vh',
        'screen-11': '11vh',
        'screen-12': '12vh',
        'screen-13': '13vh',
        'screen-14': '14vh',
        'screen-15': '15vh',
        'screen-16': '16vh',
        'screen-17': '17vh',
        'screen-18': '18vh',
        'screen-19': '19vh',
        'screen-20': '20vh',
        'screen-21': '21vh',
        'screen-22': '22vh',
        'screen-23': '23vh',
        'screen-24': '24vh',
        'screen-25': '25vh',
        'screen-26': '26vh',
        'screen-27': '27vh',
        'screen-28': '28vh',
        'screen-29': '29vh',
        'screen-30': '30vh',
        'screen-35': '35vh',
        'screen-40': '40vh',
        'screen-45': '45vh',
        'screen-50': '50vh',
        'screen-55': '55vh',
        'screen-60': '60vh',
        'screen-65': '65vh',
        'screen-70': '70vh',
        'screen-75': '75vh',
        'screen-80': '80vh',
        'screen-85': '85vh',
        'screen-90': '90vh',
        'screen-91': '91vh',
        'screen-92': '92vh',
        'screen-93': '93vh',
        'screen-94': '94vh',
        'screen-95': '95vh',
        'screen-96': '96vh',
        'screen-97': '97vh',
        'screen-98': '98vh',
        'screen-99': '99vh',

      },
      minHeight: {
        'screen-1': '1vh',
        'screen-2': '2vh',
        'screen-3': '3vh',
        'screen-4': '4vh',
        'screen-5': '5vh',
        'screen-10': '10vh',
        'screen-11': '11vh',
        'screen-12': '12vh',
        'screen-13': '13vh',
        'screen-14': '14vh',
        'screen-15': '15vh',
        'screen-16': '16vh',
        'screen-17': '17vh',
        'screen-18': '18vh',
        'screen-19': '19vh',
        'screen-20': '20vh',
        'screen-21': '21vh',
        'screen-22': '22vh',
        'screen-23': '23vh',
        'screen-24': '24vh',
        'screen-25': '25vh',
        'screen-26': '26vh',
        'screen-27': '27vh',
        'screen-28': '28vh',
        'screen-29': '29vh',
        'screen-30': '30vh',
        'screen-35': '35vh',
        'screen-40': '40vh',
        'screen-45': '45vh',
        'screen-50': '50vh',
        'screen-55': '55vh',
        'screen-60': '60vh',
        'screen-65': '65vh',
        'screen-70': '70vh',
        'screen-75': '75vh',
        'screen-80': '80vh',
        'screen-85': '85vh',
        'screen-90': '90vh',
        'screen-91': '91vh',
        'screen-92': '92vh',
        'screen-93': '93vh',
        'screen-94': '94vh',
        'screen-95': '95vh',
        'screen-96': '96vh',
        'screen-97': '97vh',
        'screen-98': '98vh',
        'screen-99': '99vh',

      },
      height: {
        '1/12': 'calc(100% / 12)', // Define custom height for 1/12 of the container height
        '2/12': 'calc(100% / 6)',
        '3/12': 'calc(100% / 4)',
        '4/12': 'calc(100% / 3)',
        '5/12': 'calc(100% / 2.4)',
        '6/12': 'calc(100% / 2)',
        '7/12': 'calc(100% / 1.714)',
        '8/12': 'calc(100% / 1.5)',
        '9/12': 'calc(100% / 1.333)',
        '10/12': 'calc(100% / 1.2)',
        '11/12': 'calc(100% / 1.091)',
      },
      width: {
        '1/7': '14.2857143%', // Define custom width for w-1/7
        '2/7': '28.5714286%', 
        '3/7': '42.8571429%', 
        '4/7': '57.1428571%', 
        '5/7': '71.4285714%', 
        '6/7': '85.7142857%',
        
        '1/8': '12.5%', // Define custom width for w-1/8
        '2/8': '25%',   
        '3/8': '37.5%', 
        '4/8': '50%',   
        '5/8': '62.5%', 
        '6/8': '75%',   
        '7/8': '87.5%',

        '1/9': '11.1111111%', // Define custom width for w-1/9
        '2/9': '22.2222222%',
        '3/9': '33.3333333%',
        '4/9': '44.4444444%',
        '5/9': '55.5555556%',
        '6/9': '66.6666667%',
        '7/9': '77.7777778%',
        '8/9': '88.8888889%',

        '1/10': '10%', // Define custom width for w-1/10
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%',

        '1/11': '9.090909%', // Define custom width for w-1/11
        '2/11': '18.181818%',
        '3/11': '27.272727%',
        '4/11': '36.363636%',
        '5/11': '45.454545%',
        '6/11': '54.545455%',
        '7/11': '63.636364%',
        '8/11': '72.727273%',
        '9/11': '81.818182%',
        '10/11': '90.909091%',
        '1/13': '7.6923%',
        '2/13': '15.3846%',
        '3/13': '23.0769%',
        '4/13': '30.7692%',
        '5/13': '38.4615%',
        '6/13': '46.1538%',
        '7/13': '53.8462%',
        '8/13': '61.5385%',
        '9/13': '69.2308%',
        '10/13': '76.9231%',
        '11/13': '84.6154%',
        '12/13': '92.3077%',
        '1/14': '7.1429%',
        '2/14': '14.2857%',
        '3/14': '21.4286%',
        '4/14': '28.5714%',
        '5/14': '35.7143%',
        '6/14': '42.8571%',
        '7/14': '50%',
        '8/14': '57.1429%',
        '9/14': '64.2857%',
        '10/14': '71.4286%',
        '11/14': '78.5714%',
        '12/14': '85.7143%',
        '13/14': '92.8571%',
        '1/15': '6.6667%',
        '2/15': '13.3333%',
        '3/15': '20%',
        '4/15': '26.6667%',
        '5/15': '33.3333%',
        '6/15': '40%',
        '7/15': '46.6667%',
        '8/15': '53.3333%',
        '9/15': '60%',
        '10/15': '66.6667%',
        '11/15': '73.3333%',
        '12/15': '80%',
        '13/15': '86.6667%',
        '14/15': '93.3333%',

        '1/20': '5%',
        '2/20': '10%',
        '3/20': '15%',
        '4/20': '20%',
        '5/20': '25%',
        '6/20': '30%',
        '7/20': '35%',
        '8/20': '40%',
        '9/20': '45%',
        '10/20': '50%',
        '11/20': '55%',
        '12/20': '60%',
        '13/20': '65%',
        '14/20': '70%',
        '15/20': '75%',
        '16/20': '80%',
        '17/20': '85%',
        '18/20': '90%',
        '19/20': '95%',

        '1/21': '4.7619%',
        '2/21': '9.5238%',
        '3/21': '14.2857%',
        '4/21': '19.0476%',
        '5/21': '23.8095%',
        '6/21': '28.5714%',
        '7/21': '33.3333%',
        '8/21': '38.0952%',
        '9/21': '42.8571%',
        '10/21': '47.6190%',
        '11/21': '52.3810%',
        '12/21': '57.1429%',
        '13/21': '61.9048%',
        '14/21': '66.6667%',
        '15/21': '71.4286%',
        '16/21': '76.1905%',
        '17/21': '80.9524%',
        '18/21': '85.7143%',
        '19/21': '90.4762%',
        '20/21': '95.2381%',

        '1/22': '4.5455%',
        '2/22': '9.0909%',
        '3/22': '13.6364%',
        '4/22': '18.1818%',
        '5/22': '22.7273%',
        '6/22': '27.2727%',
        '7/22': '31.8182%',
        '8/22': '36.3636%',
        '9/22': '40.9091%',
        '10/22': '45.4545%',
        '11/22': '50%',
        '12/22': '54.5455%',
        '13/22': '59.0909%',
        '14/22': '63.6364%',
        '15/22': '68.1818%',
        '16/22': '72.7273%',
        '17/22': '77.2727%',
        '18/22': '81.8182%',
        '19/22': '86.3636%',
        '20/22': '90.9091%',
        '21/22': '95.4545%',

        '1/23': '4.3478%',
        '2/23': '8.6957%',
        '3/23': '13.0435%',
        '4/23': '17.3913%',
        '5/23': '21.7391%',
        '6/23': '26.0870%',
        '7/23': '30.4348%',
        '8/23': '34.7826%',
        '9/23': '39.1304%',
        '10/23': '43.4783%',
        '11/23': '47.8261%',
        '12/23': '52.1739%',
        '13/23': '56.5217%',
        '14/23': '60.8696%',
        '15/23': '65.2174%',
        '16/23': '69.5652%',
        '17/23': '73.9130%',
        '18/23': '78.2609%',
        '19/23': '82.6087%',
        '20/23': '86.9565%',
        '21/23': '91.3043%',
        '22/23': '95.6522%',

        '1/24': '4.1667%',
        '2/24': '8.3333%',
        '3/24': '12.5%',
        '4/24': '16.6667%',
        '5/24': '20.8333%',
        '6/24': '25%',
        '7/24': '29.1667%',
        '8/24': '33.3333%',
        '9/24': '37.5%',
        '10/24': '41.6667%',
        '11/24': '45.8333%',
        '12/24': '50%',
        '13/24': '54.1667%',
        '14/24': '58.3333%',
        '15/24': '62.5%',
        '16/24': '66.6667%',
        '17/24': '70.8333%',
        '18/24': '75%',
        '19/24': '79.1667%',
        '20/24': '83.3333%',
        '21/24': '87.5%',
        '22/24': '91.6667%',
        '23/24': '95.8333%',

        '1/25': '4%',
        '2/25': '8%',
        '3/25': '12%',
        '4/25': '16%',
        '5/25': '20%',
        '6/25': '24%',
        '7/25': '28%',
        '8/25': '32%',
        '9/25': '36%',
        '10/25': '40%',
        '11/25': '44%',
        '12/25': '48%',
        '13/25': '52%',
        '14/25': '56%',
        '15/25': '60%',
        '16/25': '64%',
        '17/25': '68%',
        '18/25': '72%',
        '19/25': '76%',
        '20/25': '80%',
        '21/25': '84%',
        '22/25': '88%',
        '23/25': '92%',
        '24/25': '96%',
        
        '1/26': '3.8462%',
        '2/26': '7.6923%',
        '3/26': '11.5385%',
        '4/26': '15.3846%',
        '5/26': '19.2308%',
        '6/26': '23.0769%',
        '7/26': '26.9231%',
        '8/26': '30.7692%',
        '9/26': '34.6154%',
        '10/26': '38.4615%',
        '11/26': '42.3077%',
        '12/26': '46.1538%',
        '13/26': '50%',
        '14/26': '53.8462%',
        '15/26': '57.6923%',
        '16/26': '61.5385%',
        '17/26': '65.3846%',
        '18/26': '69.2308%',
        '19/26': '73.0769%',
        '20/26': '76.9231%',
        '21/26': '80.7692%',
        '22/26': '84.6154%',
        '23/26': '88.4615%',
        '24/26': '92.3077%',
        '25/26': '96.1538%',

        // 1/27 to 26/27
        '1/27': '3.7037%',
        '2/27': '7.4074%',
        '3/27': '11.1111%',
        '4/27': '14.8148%',
        '5/27': '18.5185%',
        '6/27': '22.2222%',
        '7/27': '25.9259%',
        '8/27': '29.6296%',
        '9/27': '33.3333%',
        '10/27': '37.037%',
        '11/27': '40.7407%',
        '12/27': '44.4444%',
        '13/27': '48.1481%',
        '14/27': '51.8519%',
        '15/27': '55.5556%',
        '16/27': '59.2593%',
        '17/27': '62.963%',
        '18/27': '66.6667%',
        '19/27': '70.3704%',
        '20/27': '74.0741%',
        '21/27': '77.7778%',
        '22/27': '81.4815%',
        '23/27': '85.1852%',
        '24/27': '88.8889%',
        '25/27': '92.5926%',
        '26/27': '96.2963%',

        // 1/28 to 27/28
        '1/28': '3.5714%',
        '2/28': '7.1429%',
        '3/28': '10.7143%',
        '4/28': '14.2857%',
        '5/28': '17.8571%',
        '6/28': '21.4286%',
        '7/28': '25%',
        '8/28': '28.5714%',
        '9/28': '32.1429%',
        '10/28': '35.7143%',
        '11/28': '39.2857%',
        '12/28': '42.8571%',
        '13/28': '46.4286%',
        '14/28': '50%',
        '15/28': '53.5714%',
        '16/28': '57.1429%',
        '17/28': '60.7143%',
        '18/28': '64.2857%',
        '19/28': '67.8571%',
        '20/28': '71.4286%',
        '21/28': '75%',
        '22/28': '78.5714%',
        '23/28': '82.1429%',
        '24/28': '85.7143%',
        '25/28': '89.2857%',
        '26/28': '92.8571%',
        '27/28': '96.4286%',

        // 1/29 to 28/29
        '1/29': '3.4483%',
        '2/29': '6.8966%',
        '3/29': '10.3448%',
        '4/29': '13.7931%',
        '5/29': '17.2414%',
        '6/29': '20.6897%',
        '7/29': '24.1379%',
        '8/29': '27.5862%',
        '9/29': '31.0345%',
        '10/29': '34.4828%',
        '11/29': '37.931%',
        '12/29': '41.3793%',
        '13/29': '44.8276%',
        '14/29': '48.2759%',
        '15/29': '51.7241%',
        '16/29': '55.1724%',
        '17/29': '58.6207%',
        '18/29': '62.069%',
        '19/29': '65.5172%',
        '20/29': '68.9655%',
        '21/29': '72.4138%',
        '22/29': '75.8621%',
        '23/29': '79.3103%',
        '24/29': '82.7586%',
        '25/29': '86.2069%',
        '26/29': '89.6552%',
        '27/29': '93.1034%',
        '28/29': '96.5517%',

        // 1/30 to 29/30
        '1/30': '3.3333%',
        '2/30': '6.6667%',
        '3/30': '10%',
        '4/30': '13.3333%',
        '5/30': '16.6667%',
        '6/30': '20%',
        '7/30': '23.3333%',
        '8/30': '26.6667%',
        '9/30': '30%',
        '10/30': '33.3333%',
        '11/30': '36.6667%',
        '12/30': '40%',
        '13/30': '43.3333%',
        '14/30': '46.6667%',
        '15/30': '50%',
        '16/30': '53.3333%',
        '17/30': '56.6667%',
        '18/30': '60%',
        '19/30': '63.3333%',
        '20/30': '66.6667%',
        '21/30': '70%',
        '22/30': '73.3333%',
        '23/30': '76.6667%',
        '24/30': '80%',
        '25/30': '83.3333%',
        '26/30': '86.6667%',
        '27/30': '90%',
        '28/30': '93.3333%',
        '29/30': '96.6667%',

        '1/40': '2.5%',
        '2/40': '5%',
        '3/40': '7.5%',
        '4/40': '10%',
        '5/40': '12.5%',
        '6/40': '15%',
        '7/40': '17.5%',
        '8/40': '20%',
        '9/40': '22.5%',
        '10/40': '25%',
        '11/40': '27.5%',
        '12/40': '30%',
        '13/40': '32.5%',
        '14/40': '35%',
        '15/40': '37.5%',
        '16/40': '40%',
        '17/40': '42.5%',
        '18/40': '45%',
        '19/40': '47.5%',
        '20/40': '50%',
        '21/40': '52.5%',
        '22/40': '55%',
        '23/40': '57.5%',
        '24/40': '60%',
        '25/40': '62.5%',
        '26/40': '65%',
        '27/40': '67.5%',
        '28/40': '70%',
        '29/40': '72.5%',
        '30/40': '75%',
        '31/40': '77.5%',
        '32/40': '80%',
        '33/40': '82.5%',
        '34/40': '85%',
        '35/40': '87.5%',
        '36/40': '90%',
        '37/40': '92.5%',
        '38/40': '95%',
        '39/40': '97.5%',

        '1/50': '2%',
        '2/50': '4%',
        '3/50': '6%',
        '4/50': '8%',
        '5/50': '10%',
        '6/50': '12%',
        '7/50': '14%',
        '8/50': '16%',
        '9/50': '18%',
        '10/50': '20%',
        '11/50': '22%',
        '12/50': '24%',
        '13/50': '26%',
        '14/50': '28%',
        '15/50': '30%',
        '16/50': '32%',
        '17/50': '34%',
        '18/50': '36%',
        '19/50': '38%',
        '20/50': '40%',
        '21/50': '42%',
        '22/50': '44%',
        '23/50': '46%',
        '24/50': '48%',
        '25/50': '50%',
        '26/50': '52%',
        '27/50': '54%',
        '28/50': '56%',
        '29/50': '58%',
        '30/50': '60%',
        '31/50': '62%',
        '32/50': '64%',
        '33/50': '66%',
        '34/50': '68%',
        '35/50': '70%',
        '36/50': '72%',
        '37/50': '74%',
        '38/50': '76%',
        '39/50': '78%',
        '40/50': '80%',
        '41/50': '82%',
        '42/50': '84%',
        '43/50': '86%',
        '44/50': '88%',
        '45/50': '90%',
        '46/50': '92%',
        '47/50': '94%',
        '48/50': '96%',
        '49/50': '98%',
      },
      minHeight: {
        'screen-2': '2vh',
        'screen-3': '3vh',
        'screen-4': '4vh',
        'screen-5': '5vh',
        'screen-5': '6vh',
        'screen-5': '7vh',
        'screen-5': '8vh',
        'screen-5': '9vh',
        'screen-10': '10vh',
        'screen-11': '11vh',
        'screen-12': '12vh',
        'screen-13': '13vh',
        'screen-14': '14vh',
        'screen-15': '15vh',
        'screen-16': '16vh',
        'screen-17': '17vh',
        'screen-18': '18vh',
        'screen-19': '19vh',
        'screen-20': '20vh',
        'screen-21': '21vh',
        'screen-22': '22vh',
        'screen-23': '23vh',
        'screen-24': '24vh',
        'screen-25': '25vh',
        'screen-26': '26vh',
        'screen-27': '27vh',
        'screen-28': '28vh',
        'screen-29': '29vh',
        'screen-30': '30vh',
        'screen-35': '35vh',
        'screen-40': '40vh',
        'screen-45': '45vh',
        'screen-50': '50vh',
        'screen-55': '55vh',
        'screen-60': '60vh',
        'screen-65': '65vh',
        'screen-70': '70vh',
        'screen-75': '75vh',
        'screen-80': '80vh',
        'screen-85': '85vh',
        'screen-90': '90vh',
        'screen-91': '91vh',
        'screen-92': '92vh',
        'screen-93': '93vh',
        'screen-94': '94vh',
        'screen-95': '95vh',
        'screen-96': '96vh',
        'screen-97': '97vh',
        'screen-98': '98vh',
        'screen-99': '99vh',

      },
      minWidth: {
        'screen-2': '2vw',
        'screen-3': '3vw',
        'screen-4': '4vw',
        'screen-5': '5vw',
        'screen-5': '6vw',
        'screen-5': '7vw',
        'screen-5': '8vw',
        'screen-5': '9vw',
        'screen-10': '10vw',
        'screen-11': '11vw',
        'screen-12': '12vw',
        'screen-13': '13vw',
        'screen-14': '14vw',
        'screen-15': '15vw',
        'screen-16': '16vw',
        'screen-17': '17vw',
        'screen-18': '18vw',
        'screen-19': '19vw',
        'screen-20': '20vw',
        'screen-21': '21vw',
        'screen-22': '22vw',
        'screen-23': '23vw',
        'screen-24': '24vw',
        'screen-25': '25vw',
        'screen-26': '26vw',
        'screen-27': '27vw',
        'screen-28': '28vw',
        'screen-29': '29vw',
        'screen-30': '30vw',
        'screen-35': '35vw',
        'screen-40': '40vw',
        'screen-45': '45vw',
        'screen-50': '50vw',
        'screen-55': '55vw',
        'screen-60': '60vw',
        'screen-65': '65vw',
        'screen-70': '70vw',
        'screen-75': '75vw',
        'screen-80': '80vw',
        'screen-85': '85vw',
        'screen-90': '90vw',
        'screen-91': '91vw',
        'screen-92': '92vw',
        'screen-93': '93vw',
        'screen-94': '94vw',
        'screen-95': '95vw',
        'screen-96': '96vw',
        'screen-97': '97vw',
        'screen-98': '98vw',
        'screen-99': '99vw',

      },
      fontSize: {
        'xss': 'calc(0.1rem + 0.1vw)',
        'footer': 'calc(0.3rem + 0.3vw)',
        'xs': 'calc(0.4rem + 0.4vw)',
        // 'sm': '.8rem',
        'sm': 'calc(0.5rem + 0.5vw)',
        'tiny': 'calc(0.65rem + 0.65vw)',
        // 'tiny': '.875rem',
        'base': 'calc(0.75rem + 0.75vw)',
        // 'base': '1rem',
        'lg': 'calc(0.85rem + 0.85vw)',
        // 'lg': '1.125rem',
        'xl': 'calc(0.95rem + 0.95vw)',
        // 'xl': '1.25rem',
        '2xl': 'calc(1.05rem + 1.05vw)',
        // '2xl': '1.5rem',
        '3xl': '1.875rem',
        // '3xl': '1.875rem',
        '4xl': '2.25rem',
        // '4xl': '2.25rem',
        '5xl': '3rem',
        // '5xl': '3rem',
        '6xl': '4rem',
        // '6xl': '4rem',
        '7xl': '5rem',
        // '7xl': '5rem',
        'responsive': 'calc(1rem + 1vw)', // Custom utility
      },
      
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),

    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    plugin(function ({addVariant, e}) {
      addVariant("collapsed", ({modifySelectors, separator}) => {
        modifySelectors(({className}) => {
          return `.collapsed .${e(`collapsed${separator}${className}`)}`;
        });
      });
      addVariant("rtl", ({modifySelectors, separator}) => {
        modifySelectors(({className}) => {
          return `.rtl .${e(`rtl${separator}${className}`)}`;
        });
      });
    }),
  ],
};
