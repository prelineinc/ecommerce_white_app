<template>
  <footer class="footer-section-wrapper bg-gray-800 px-4 print:hidden">
    <div class="2xl:container block mx-auto pt-10 lg:pt-20 pb-20 md:pb-0">
      <div class="lg:flex justify-between mb-10 md:mb-20">
        <div class="lg:w-[424px] ml-0 w-full mb-8 lg:mb-0">
          <h1 class="font-500 text-white mb-5">
            <!-- <a @click="RedirectToPage()"><img class="h-8 w-auto" src="/src/assets/preline-logo-white.svg" alt="" /></a> -->
             <a @click="RedirectToPage()"><img class="h-8 w-auto" src="/src/assets/brands/preline-white-2025.svg" alt="" /></a>
          </h1>
          <div class="mt-6 text-gray-300">
            <h6 class="mb-3">Available for your
              Smartphones</h6>
            <div class="flex">
              <a href="https://play.google.com/store/apps/details?id=preline.in&pcampaignid=web_share" target="_blank"><img   class="m-1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAAAyCAYAAADItpCRAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRDNTJBRTQwMUM0QjExRUM5N0IyRTE2ODBFNkVEQTFBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRDNTJBRTQxMUM0QjExRUM5N0IyRTE2ODBFNkVEQTFBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6REM1MkFFM0UxQzRCMTFFQzk3QjJFMTY4MEU2RURBMUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6REM1MkFFM0YxQzRCMTFFQzk3QjJFMTY4MEU2RURBMUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6ivPKAAAAViElEQVR42uxdCVwV1Rc+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" alt=""></a>
              <!-- <img class="m-1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKcAAAAyCAYAAAA5vcscAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkNDNjI5M0M3MUM0QjExRUM4RjM4RjNDQ0JFMkY3RkI4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkNDNjI5M0M4MUM0QjExRUM4RjM4RjNDQ0JFMkY3RkI4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0M2MjkzQzUxQzRCMTFFQzhGMzhGM0NDQkUyRjdGQjgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0M2MjkzQzYxQzRCMTFFQzhGMzhGM0NDQkUyRjdGQjgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz52KWycAAATtklEQVR42uxdB3QVRReeJO8lSCKEHjoRQUAQCFUwtKBGMBERy6+gIgEFARsIghRBRD0i2JCiiNKUohSlq4AgShEQFKQokCCdQChC8vLmv98ls2ffZjeEZJM8Zb9z5rzd2d2Z2Zk7t82dfQFz5s4VAQEB4sCBA2LF8uWifPnyIrxYsUKLFi5sJaVsXqFChYjz58+HpKenBwiCy+1Od7tc6ThO83iCPGlpQTgOCgqSwcHBaThO93oDUy9dchnyA6g8cenSJTd+UWdISEga/Upco3yX1+vlOoJDQjxBgYFeHKemprqvVLc+36JuQWUHXkpNdQlD3YQA1SaB/OBgT6BJ3fo2WdWdnf6gsiXV7aFDn7p1bcJt0qrubPWHy+V1u92enIyF1iZuhbSs2x0cnO4KCspyLDzp6UFpqamZ+4Py0YbQsLATh5KSNhQrVmz54cOHk5s1ayZatmol6FxwWSID9LCgQt2bN20aePTYsf/RzTWRv2fPHuHAQV6icOHCiTQ5FtLEGEYEfFJNmECemcHB4uzZs5W2bN06Z+u2bSMUYTpwkB+4cOFCxeTk5KdXr1694s99+xqFhYUxs3S5LxNm6Izp06cnJSVFO13loKBw6NCh+hMmTJhdpGjRtuHh4fvE1KlTRYvo6InQMJzkJH9IZcuWXTtkyBARRMpn+SVLlkwiJTXYmbsO/AFkgFeqVq3a5qDQ0NA++/fvj3W6xIE/wePxhAd5vd5RpHNW9ocGZbhRHDgQFy9eDAg8depU1YJsRO3atcXw4cPF+vXrRa1atWwrt0SJEuKmm24SderUEVWqVMn39ypdurR4/PHHRZEiRWwrE16VRx99VNxwww35+i4lS5YUTzzxhChVqlS+1Xnu3Lmi+D1eUIpvr5494WyWCkRMtpQLR/fatWtlSkqKPHbsmDxx4oT86aefZFRUVL6926233srvVL16ddvKJAuWy+zcuXOetj0kJEQSQWrnTZo04Xrxm4/0cSIw4yDf8corr4gPxo8Xbrebz3/99Vfx559/2lZ+hQoVxLhx40TdunXFbbfdJrZt2yaIYEXNmr4uXJfLJUjvzpSnVzGI2H1UD1xX9ynAN6cHGZjin3/+wcqUT35hqku9sx6og4jPVLVB3vXXX48VHbj9RFpaWpbvbmwLAL9hVtf17Xj33XfFp59+qvUD3iXDHymuu+465uBmsFNKKBzLb4758MMPSyOeeuop28oH5yRCl3379vXJP3jwoJw5c6ZPO/bs2SP/+usvOW3aNFmoUCHOHzNmjJwyZQofR0ZGyu3bt0siaj5/5513JA0eH7///vt875IlS5hD4zxjOVY2btxY0mDKG2+8kc8LFy4sJ0+ezHWhbSTytXa0adNG/vbbb3Lv3r2SJpGsUaOGdu2WW27ha4cOHZKzZ8+WyadPywceeMD0vUncy2+//VaSgSu3bt0qGzZsqF374IMP5NixY+WaNWvkkSNHuK00STKVQWqDJH2PE9pDVrMk1UuSBS3HjhsnDxw4wO1v1bq19gyJe/ndd99xX27evNmn/bnhnPlOnBi8H374wYcw9+3bJ4sWLWo7cT733HM++SDA3bt38/G9994rL1CHQ0Q2a9ZM/v333/Kzzz7ja08//TSf4zg+Lo7bSDoXn//xxx/y+eef18ojLiYfeughJjbgwQcfNCXODz/8UO7atYvreuSRRyRZo/Kee+7ha5UrV5aNGjWSxO3l4sWLmcAUQeOZpUuXypYtW8o333yT6+jYsWOmdyZuxpMIkw/iF/diwhQvXpyvL1y4UB4/flzed999snfv3lxO06ZNM5VTsWJFHp8tW7bItm3bSpIqsl69epK4p5xDkyM2Nlb++OOPctOmTTyWSGjz22+/zc+Op0mACYAx+NcRJ/RKEk8aYSYlJdmuC1oR55dffilJfeDjefPmyVWrVmnXnuzRg9tDoon1raNHjzInAlGBi5KY484H0ZYvX56f+eSTT5hTqDJ27twp33vvPT5ulEGcZIyxDkfimIle3QsiV9wZ7QXHIjWEdWO0Hfl33H47twn14hyEQqqCKedUOu7NN9+scTPg/vvv5/NvvvlGTpw4kY8hIVDOIyQ5zPrviy++kCtWrNDOwYEBTCCcY3JhUqIc1IdjEOeQIUO4T4By5crZonPmK2qRzgedhcSGII4gWrVqJX755Zc8qUuv76HOmDZtBA0Sn1PHijNnzmjXT2ccQ/8kA0qsW7dOEHGzB2HUqFFs8T/77LOCiAfLbJouiPdQMNMFEcSAuqGroVydqwSRQHw8evRoQZxOrF69WhBRaDpueLFiiATS2on3gf5nppdCXwWgk6p7Ubden1btQ70oR69L6wGd2KwO1Z8oF8/jFxFE0E3hHalYqRLrxa+++qrWjtwgT4gTLwZXCgYUIXgknrRrW8kweeyxx9gwueuuuzhUj0SfIDHIhFDSJncF2gDFH0o6XC/Tp08XF6nj3nrrLb6+ceNGNpTQTnRur169OI9EIV9ftmyZSEhI4AEgtYN/ifNxvr4O/QAbBxvnKBsDRWJQEBfjPPQLcRw20ABSBQRxdfHVV1/xICtDa8OGDXyMSYI+JDWAiU0ZKHoQB2cDrH379tyu1jTp8QuCN7bV2G4TH6OIiIgQpGr5EKk6xrNIIHIYsseOHxekBoge3bsLsh0Elh7tIE7bxTrEE3FCdt9AdMCdAzEFhVyvKMPAgJiBkaLEPPQa6EXQsaCb5UasQ3xDlMKQgAEAMQUxre6BSIJ+BjENEQu9V+mHSA0aNOA2DR48mM+HDx/O5/Xr19fugahfv369dr5jxw5NrDcmvQ9GhSqzbt263A/QIaELfvTRR5K4KV8bMGAA3wvDZx3pc+gTss752jPPPMP1JpL6s5p0OTxr5UqiSc/Xf//9d3ny5ElJE067BqNt/PjxmksKKkcXi3JiYmJ4LNAOmizcdr1YR/0YM6XPkvRjNSgxMZENphEjRviXQYQXhmKcFdAhUKaJI/j4N82A60OHDs1xe6oRUUDhb968OVucVvcR92TFXxGDSgiOhSGg8mGwYZD0ij4MGb0fE5MPRo3SD3E/9E11HbrsnXfemckQgVEBnRFtAcHWqVPHx5JGO0AwaAvqA8FYvQ+uk0SSJIV88qtWraq1De8GL4AiLrOESQiiQzvQJrQBBhqukSjnd0M5+ndD+/Fu0Hf9hjjxkuBMeQGjUeOkaybZYxC98MILgriP7brr9u3bBXFaZ6H5GkauOCdEEMS13YADmIwVh4M4nDPn6Nq1K7tJ7ARcHj179tQsZwfXJly5LQAuEbuxcuVK9vfZBbg99Ou+p0+f9vuBgR8W7jZEBGFNe//+/Zp/1RHr2Uiw3rBWbDdGjx5tq4i4++672WV0mBJ+sRTor+IMljHcUVhm1eNsSgp7OWAlXytiPVfECdcEfIl2o0+fPra+KII19Pj444/9ckDgotHHHZw5c4Z9n/AfKpgFVWA5Fev0ZoEc1yxxwqmdF8ZQv379bHtJ+AbhGPZ6vewkB+Do90dja9CgQVofgHuqNfWwsDD21+K63m+K9Nprr0lSU9hhjuAPhzgzUkREBHeM3UBol10v2alTJy4TK0Xx8fFMpACic/xpMEBYCDkDEO6W3ed+/vlnfgYRSf81sZ4rg+jkyZPi8OHDvAZrJ7DObhfuuOMO/iXOItasWcPBF9huQJxIzJs3L9P99erV42CU8+fPi8mTJ3PQBmIB4MfFWjLWyKdMmSJId/V5DnEC2Bayc+dOXn/H+jk8GVFRUWzQIOBkxowZpuviAOIAsM4PnDt37orvFVW/vohu0YLX4gH8IjAFn5AhO0AsWLjQ5/7q1avztpGGDRtyYAeCr6dNm8Zr8kZDDPfhF/2TlJQkevToIWJjY7k/Fi9erN0LIxNxATExMbzmv3fvXg5SpsnlH37ORYsW2c45wd30wbg5TS6Xi3U24I033tBiMIED+/ezuDQ+k5CQcNkAIV26bUyMpgroAS7coUMHn+cQCAzMmjWLYzqxVm7E999/b7m0h6VAhMsBCEHr0qVLlu82bNgwy/5DOfp7YWBCfzUC9SAAWgVZK71XxTp0ID0WIYMK/fv31+7D0iZ80WbLziNHjvSP5UujsWEXEEigos9zmrBmrgZBxYwiWFYBIt/4TPv27TXihCGCX+h1GJjPP/9cezY5OVnTCZEmTZp0mehJ90N9GzdulC8PHixffvlljm5XQNCvVXsRAK0nnAkTJrCuaXYv8tEu6NNKj3799deZEBF8Y6bHIogZwSDdu3fndiiogBCl30J/Bb7++mvtXUHwKo4UtgbicAHExaJPo6OjmQEoIAilwIkTQQZ5BXQ8rFBwwJy0DUYFAL1MbZ9AQAbcSVZWe+vWrbX6EeFjdN2AKyiAIFU+tj0owOWjN1wQqIFtDEoqIEreqs2IQkI0l16KQDoZObVK4MZWOieCQBRI1dACN8yknorKhysLEVoKINAqkZE+z4EgAUSPqX5VCXkANhgWOHHCfaHnDHkBq4jtK4XNKWMBWxb01+bPn8/5CC0zWrjYz2NGfEK3MxFhbwBC7dTEUcQJYoqLizP1tSpA2mTVdkT3gACMohiR5sbtD8r1hHcxupKwnUQB3C3T0nPt2pr6obao6IkT4h37h/TPIDoLUs1K8ii1iPRmLQqqQAwitdQIJXjMmDF5tkpARHDVz9QngwHKP4AocRg1CJZF0DAMFAArMC3IqMCKlBkQCG0EIr2J47Dxgyhw7IoksaddR8CvmUEAQyolJYWNCNUuKyAIGQlB2MRJ2UCBwTRixAhBE0PMmTMnW30AQwVAJD2CgTP16+7dbNhFRkZyULgQvltx0e+ks/s8U7VqVW3/+uDBgzlIWwUuI1IeK1oADCTsgIVBVWDLlwAiuNFxxi22doA4g9iSA+sPHx9QnUY6FiczEJezJE4ry1ptt4Alb9wmq7ZHGIElU3g3QJz6nQFZAdZvnz59xNy5c3k5F1Y2osyJ819xezCgiAiTBxPDCLRVTVQ1dvq2w2NhfJcypUtrEfHwbJhBPWPWD/lOnHBdYJ8NKei2EiY6r1+/fpZEYgV0HolnbfZ/S8QXpPaYU4d5KYEoMbObNGly1e1Sg46BVYNrNjh6wN1WvHhxPj516tRV1YetFqRbslsMnAsuJ+M6u1mdiiDVhABXN8YcqImi7g002ZbhU6Zu+0Xv3r2ZeViNQW4/POyyi5DI4uP9I5UqVbKNOMmi5H00VwuIQwwiQBYvf1whUzAIdd6T1N4GDRpwMvr79ESoB7gXfJqKg4K76IHBRh8YiQf+TuUPhr81J+qT+sWmNyNR4qMJxg844BM/EO2YFPjsj9pPpO+nsmXL8nHiwYPZ4+b79rGagHdBW7CHKK9g2wY3NBj6h10Ad4G+lRPAMazC+Kx2dn6/atXl2UkctXPnzqb3wPGsBk9h4MCB2jedsCnNSBDgRuD2Rq7Zt29fjbhmzpxpWh8WBipXrmyaD90YwO5P/S5OtTMT7SxXrpzPc/NJ3VJIILXGyAmxSxLOdhD47GzqsWQMcRA4gPfEt6j8MirJLNEL59o6hyPXzBLM7jIgLFdlTesdzPqE/elwpgNwtCuXiN5aB9TXObD3R++Qxlc19PuO9NY6sGDBAl4uhUNeeQ0AtVfdLMLrYGIiW+jYeAeXEr6CgvuVRY1NZ9hrZOWMJ92ZP5iAtiqPxdSpU7XrOMYedGxUg3Vu5j3QW+tGZ75K8GmqmApiIuxea9euHdfbrVs3XpBQbShQV5JZgjPYDJs2b5Zvjx3LOxmx+xADbAR2a1p9biU7CRuzFIwuJGNSjnNAuUz0xAmnNT7DYgQIFhu+9GUp4oSbRU8QeuBjBVaRQ/j4gtkqjgKIQH0gQRg2rhkjw/DxCL1Lzao9AD7koG8TJolyFWW1Xg+/K3bYWsGGVaITrrxgxRB9sIBhIZcpU4Z1HeIk7M7QK+5ww8AggQ4H/QfiAm6p3CjS2C8NdQD1LF++PMt7oYuiTohio3gGsI6MdWWIfeiMKJsIlvMh3swAMTlo0CB+D5pk7KKBSwofkMCau8fjsXRboQ7EFRB3FBUqVhQBGTEB2EeFjzyYuWWwp75p06aiS5cu7BqDRwDqht6ohCuKJqKIJyOwQcOGnEfcnNf78asH9Nn+/fuz+w1xE1aAxwAqU2syPFtER/M+d6gYiC3A/n+s3fudWP+3Jz3nfOmll7L9nOKc4GK5dD47Se0hcr4mbD+cPrXJWi9ZosRRpxscwvQ3hIaGXggsHRGxyekKX1eQ5gR2ZV8lVx+ERcynQ6C5R5EiRY4F3BUb23LpsmWrcrvU9F8B1svhlAeB7d6923R93QxYa4ePEmvvMDL0X59zcPWIj48fis/vBZYvV26ro4A7yV9SoUKFTvR/8cXigTVq1vR27datJ4mjFGe+OvAHtGvXbkCpUqVOBXXq1Anr0Elulytx165dbTweTyGnexwUBBAf0LFjx6HdEhLGwQfO2j8ia+pHRc1o0rhxfHh4+A6nmxzkN4Ld7oMxbdo8FhcfPxLRU7CBNHMUinxoWNgPcXFxDei4w8qVKx9NTU2tFBwcXDg9PR3h12yCBmZ8pB7H+ON4LyV2oWQslWXkIywt0JgPeL1ePgm4bBl7jfkZdXiVxUv5AVeq25BvWjfyKWVZd8BlV5BV3Vp+FnVnpz8s6zbkm9adnf5AXuAV+uNKYyEyFMBcjoVVf3BekMt1yZuefiQiImIOEeSsMhERyVihUsb5/wUYAB9Iwc9s4AoTAAAAAElFTkSuQmCC" alt="" /> -->
            </div>
          </div>
        </div>
        <div class="flex-1 md:flex">
          <div class="md:w-1/3 w-full mb-8 lg:mb-0">
            <div class="mb-3">
              <h6 class="font-500 text-white">Company</h6>
            </div>
            <div>
              <ul class="flex flex-col space-y-2 md:space-y-4">
                <li>
                  <a @click="RedirectToPage('aboutus')" 
                    class="text-gray-400 hover:text-gray-200 hover:no-underline cursor-pointer capitalize transition-colors duration-200 ease-out">
                    <span>About
                      Us</span></a>
                </li>
                <li>
                  <a @click="RedirectToPage('termscondition')" 
                    class="text-gray-400 hover:text-gray-200 hover:no-underline cursor-pointer capitalize transition-colors duration-200 ease-out">
                    <span>Terms
                      & Conditions</span></a>
                </li>
                <li>
                  <a @click="RedirectToPage('privacypolicy')" 
                    class="text-gray-400 hover:text-gray-200 hover:no-underline cursor-pointer capitalize transition-colors duration-200 ease-out">
                    <span>Privacy
                      Policy</span></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:w-1/3 lg:flex lg:flex-col items-center w-full mb-8 lg:mb-0">
            <div>
              <div class="mb-3">
                <h6 class="font-500 text-white">General Links</h6>
              </div>
              <div>
                <ul class="flex flex-col space-y-2 md:space-y-4">
                  <li>
                    <a @click="RedirectToPage('track')"
                      class="text-gray-400 hover:text-gray-200 hover:no-underline cursor-pointer capitalize transition-colors duration-200 ease-out">
                      <span>Track Order</span></a>
                  </li>
                  <li>
                    <a @click="RedirectToPage('cancellationpolicy')"
                      class="text-gray-400 hover:text-gray-200 hover:no-underline cursor-pointer capitalize transition-colors duration-200 ease-out">
                      <span>Cancellation Policy</span></a>
                  </li>
                  <li>
                    <a @click="RedirectToPage('returnpolicy')"
                      class="text-gray-400 hover:text-gray-200 hover:no-underline cursor-pointer capitalize transition-colors duration-200 ease-out">
                      <span>Return Policy</span></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="md:w-1/3 lg:flex lg:flex-col items-center w-full mb-8 lg:mb-0">
            <div>
              <div class="mb-3">
                <h6 class="font-500 text-white">Help</h6>
              </div>
              <div>
                <ul class="flex flex-col space-y-2 md:space-y-4">
                  <li>
                    <a @click="RedirectToPage('faq')"
                      class="text-gray-400 hover:text-gray-200 hover:no-underline cursor-pointer capitalize transition-colors duration-200 ease-out">
                      <span>FAQ</span></a>
                  </li>
                  <li>
                    <a @click="RedirectToPage('support')"
                      class="text-gray-400 hover:text-gray-200 hover:no-underline cursor-pointer capitalize transition-colors duration-200 ease-out">
                      <span>Support</span>
                    </a>
                  </li>
                  <li>
                    <a @click="RedirectToPage('contact')"
                      class="text-gray-400 hover:text-gray-200 hover:no-underline cursor-pointer capitalize transition-colors duration-200 ease-out">
                      <span>Contact</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-bar border-t border-qgray-border lg:h-[82px] lg:flex justify-between items-center">
        <div class="flex lg:space-x-5 justify-between items-center">
          <div class="flex space-x-5 items-center py-2">
            <a href="https://www.instagram.com/prelineindia/" target="_blank">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                class="fill-current text-gray-400 hover:text-gray-200" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.1016 4.90039C12.6538 4.90039 13.1016 4.45268 13.1016 3.90039C13.1016 3.34811 12.6538 2.90039 12.1016 2.90039C11.5493 2.90039 11.1016 3.34811 11.1016 3.90039C11.1016 4.45268 11.5493 4.90039 12.1016 4.90039Z">
                </path>
                <path
                  d="M8 12C5.8 12 4 10.2 4 8C4 5.8 5.8 4 8 4C10.2 4 12 5.8 12 8C12 10.2 10.2 12 8 12ZM8 6C6.9 6 6 6.9 6 8C6 9.1 6.9 10 8 10C9.1 10 10 9.1 10 8C10 6.9 9.1 6 8 6Z">
                </path>
                <path
                  d="M12 16H4C1.9 16 0 14.1 0 12V4C0 1.9 1.9 0 4 0H12C14.1 0 16 1.9 16 4V12C16 14.1 14.1 16 12 16ZM4 2C3.1 2 2 3.1 2 4V12C2 13 3 14 4 14H12C12.9 14 14 12.9 14 12V4C14 3.1 12.9 2 12 2H4Z">
                </path>
              </svg>
            </a>
            <a href="https://www.facebook.com/prelinewhite/" target="_blank"><svg width="10" height="16" viewBox="0 0 10 16" fill="none"
                class="fill-current text-gray-400 hover:text-gray-200" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3 16V9H0V6H3V4C3 1.3 4.7 0 7.1 0C8.3 0 9.2 0.1 9.5 0.1V2.9H7.8C6.5 2.9 6.2 3.5 6.2 4.4V6H10L9 9H6.3V16H3Z">
                </path>
              </svg>
            </a>
            <a href="https://www.youtube.com/@PrelineInc" target="_blank"><svg width="16" height="12" viewBox="0 0 16 12" fill="none"
                class="fill-current text-gray-400 hover:text-gray-200" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.8 2.8C15.6 1.5 15 0.6 13.6 0.4C11.4 8.9407e-08 8 0 8 0C8 0 4.6 8.9407e-08 2.4 0.4C1 0.6 0.3 1.5 0.2 2.8C0 4.1 0 6 0 6C0 6 0 7.9 0.2 9.2C0.4 10.5 1 11.4 2.4 11.6C4.6 12 8 12 8 12C8 12 11.4 12 13.6 11.6C15 11.3 15.6 10.5 15.8 9.2C16 7.9 16 6 16 6C16 6 16 4.1 15.8 2.8ZM6 9V3L11 6L6 9Z">
                </path>
              </svg>
            </a>
          </div>
          <span class="md:text-xs text-[10px] text-gray-400 font-300 py-2"> © 2025 <a href="#" target="_blank"
              rel="noreferrer" class="font-500 text-qblack mx-1">Preline</a> All rights reserved</span>
        </div>
        <div class="py-2">
          <a href="#"><img width="318" height="28" src="../../assets/payment-gateways.png" alt="payment-gateways" /></a>
        </div>
      </div>
    </div>
  </footer>

</template>
<script lang="ts" setup>

import { useRouter } from 'vue-router';

const router = useRouter();
const RedirectToPage = (path:string = '')=>{
  router.push(`/${path}`)
}
</script>
<style></style>