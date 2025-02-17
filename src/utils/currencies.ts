const currencies = [
  { country: "", currency: "Select" },
  { country: "AE", currency: "AED" },
  { country: "AF", currency: "AFN" },
  { country: "AL", currency: "ALL" },
  { country: "AM", currency: "AMD" },
  { country: "CW", currency: "ANG" },
  { country: "AO", currency: "AOA" },
  { country: "AR", currency: "ARS" },
  { country: "AU", currency: "AUD" },
  { country: "AW", currency: "AWG" },
  { country: "AZ", currency: "AZN" },
  { country: "BA", currency: "BAM" },
  { country: "BB", currency: "BBD" },
  { country: "BD", currency: "BDT" },
  { country: "BG", currency: "BGN" },
  { country: "BH", currency: "BHD" },
  { country: "BI", currency: "BIF" },
  { country: "BM", currency: "BMD" },
  { country: "BN", currency: "BND" },
  { country: "BO", currency: "BOB" },
  { country: "BR", currency: "BRL" },
  { country: "BS", currency: "BSD" },
  { country: "BT", currency: "BTN" },
  { country: "BW", currency: "BWP" },
  { country: "BY", currency: "BYN" },
  { country: "BZ", currency: "BZD" },
  { country: "CA", currency: "CAD" },
  { country: "CD", currency: "CDF" },
  { country: "CH", currency: "CHF" },
  { country: "CL", currency: "CLP" },
  { country: "CN", currency: "CNY" },
  { country: "CO", currency: "COP" },
  { country: "CR", currency: "CRC" },
  { country: "CU", currency: "CUP" },
  { country: "CV", currency: "CVE" },
  { country: "CY", currency: "CYP" },
  { country: "CZ", currency: "CZK" },
  { country: "DJ", currency: "DJF" },
  { country: "DK", currency: "DKK" },
  { country: "DO", currency: "DOP" },
  { country: "DZ", currency: "DZD" },
  { country: "EE", currency: "EEK" },
  { country: "EG", currency: "EGP" },
  { country: "ET", currency: "ETB" },
  { country: "FJ", currency: "FJD" },
  { country: "GB", currency: "GBP" },
  { country: "GE", currency: "GEL" },
  { country: "GH", currency: "GHS" },
  { country: "GM", currency: "GMD" },
  { country: "GN", currency: "GNF" },
  { country: "GR", currency: "GRD" },
  { country: "GT", currency: "GTQ" },
  { country: "GY", currency: "GYD" },
  { country: "HK", currency: "HKD" },
  { country: "HN", currency: "HNL" },
  { country: "HR", currency: "HRK" },
  { country: "HT", currency: "HTG" },
  { country: "HU", currency: "HUF" },
  { country: "ID", currency: "IDR" },
  { country: "IL", currency: "ILS" },
  { country: "IN", currency: "INR" },
  { country: "IQ", currency: "IQD" },
  { country: "IR", currency: "IRR" },
  { country: "IS", currency: "ISK" },
  { country: "JM", currency: "JMD" },
  { country: "JO", currency: "JOD" },
  { country: "JP", currency: "JPY" },
  { country: "KE", currency: "KES" },
  { country: "KG", currency: "KGS" },
  { country: "KH", currency: "KHR" },
  { country: "KM", currency: "KMF" },
  { country: "KR", currency: "KRW" },
  { country: "KW", currency: "KWD" },
  { country: "KY", currency: "KYD" },
  { country: "KZ", currency: "KZT" },
  { country: "LA", currency: "LAK" },
  { country: "LB", currency: "LBP" },
  { country: "LK", currency: "LKR" },
  { country: "LR", currency: "LRD" },
  { country: "LS", currency: "LSL" },
  { country: "LT", currency: "LTL" },
  { country: "LV", currency: "LVL" },
  { country: "LY", currency: "LYD" },
  { country: "MA", currency: "MAD" },
  { country: "MD", currency: "MDL" },
  { country: "MG", currency: "MGA" },
  { country: "MK", currency: "MKD" },
  { country: "MM", currency: "MMK" },
  { country: "MN", currency: "MNT" },
  { country: "MO", currency: "MOP" },
  { country: "MR", currency: "MRO" },
  { country: "MT", currency: "MTL" },
  { country: "MU", currency: "MUR" },
  { country: "MV", currency: "MVR" },
  { country: "MW", currency: "MWK" },
  { country: "MX", currency: "MXN" },
  { country: "MY", currency: "MYR" },
  { country: "MZ", currency: "MZN" },
  { country: "NA", currency: "NAD" },
  { country: "NG", currency: "NGN" },
  { country: "NI", currency: "NIO" },
  { country: "NO", currency: "NOK" },
  { country: "NP", currency: "NPR" },
  { country: "NZ", currency: "NZD" },
  { country: "OM", currency: "OMR" },
  { country: "PA", currency: "PAB" },
  { country: "PE", currency: "PEN" },
  { country: "PG", currency: "PGK" },
  { country: "PH", currency: "PHP" },
  { country: "PK", currency: "PKR" },
  { country: "PL", currency: "PLN" },
  { country: "PY", currency: "PYG" },
  { country: "QA", currency: "QAR" },
  { country: "RO", currency: "RON" },
  { country: "RS", currency: "RSD" },
  { country: "RU", currency: "RUB" },
  { country: "RW", currency: "RWF" },
  { country: "SA", currency: "SAR" },
  { country: "SD", currency: "SDG" },
  { country: "SE", currency: "SEK" },
  { country: "SG", currency: "SGD" },
  { country: "SY", currency: "SYP" },
  { country: "TH", currency: "THB" },
  { country: "TJ", currency: "TJS" },
  { country: "TM", currency: "TMM" },
  { country: "TN", currency: "TND" },
  { country: "TO", currency: "TOP" },
  { country: "TR", currency: "TRY" },
  { country: "TT", currency: "TTD" },
  { country: "TW", currency: "TWD" },
  { country: "TZ", currency: "TZS" },
  { country: "UA", currency: "UAH" },
  { country: "UG", currency: "UGX" },
  { country: "US", currency: "USD" },
  { country: "UY", currency: "UYU" },
  { country: "UZ", currency: "UZS" },
  { country: "VE", currency: "VES" },
  { country: "VN", currency: "VND" },
  { country: "ZA", currency: "ZAR" },
  { country: "ZM", currency: "ZMW" },
];

export default currencies;