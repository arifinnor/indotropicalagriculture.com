# HS Code Recommendations

This document contains recommended changes for product HS codes in the Indo Tropical Agriculture catalog.

> **Note**: This document is for reference only. Always verify HS codes with official customs authorities before applying changes.

## Summary

| Category | Products | Status |
|----------|----------|--------|
| Typos Fixed | 8 products | ✅ Completed |
| Format Inconsistencies | ~20 products | ⚠️ Needs review |
| Incorrect HS Values | 6+ products | ⚠️ Needs verification |

---

## Part 1: Format Standardization

### Recommended Standard Format

Use **6-digit HS codes** with period separators:

```
XXXX.XX
```

Examples:
- `0907.00` (Cloves)
- `0906.20` (Cinnamon, crushed/ground)
- `0908.20.00` (Mace)

### Current Format Issues

| Product | Current Format | Recommended Format | Issue |
|---------|---------------|-------------------|-------|
| Cinnamon Grade A | `0906.11.00` | `0906.11` or `0906.11.00` | Inconsistent digit length |
| Nutmeg AB | `0908.40.00.00.` | `0908.40.00` | Too many digits + trailing period |
| Nutmeg in shell | `0908.10.00.10` | `0908.10.00` | Too many digits |
| Vanilla Bean | `0905.10.` | `0905.00` | Wrong code + trailing period |
| Raw Cashew Nut | `0801 310000` | `0801.31.00` | Space separator |
| Cashew Nut W320 | `8013220` | `0801.32.20` | Missing leading zero |

---

## Part 2: HS Code Value Corrections

### Clove Products (HS 0907)

| Product | Current | Recommended | Notes |
|---------|---------|-------------|-------|
| Clove | `0907` | `0907.00` | Whole or crushed cloves |
| Clove Stem | `0907` | `0907.00` | Clove stems included |
| Clove Broken Head | `0907` | `0907.00` | Broken cloves |

**Reference**: HS 0907.00 - Cloves (including stems), whether or not crushed

---

### Cinnamon Products (HS 0906)

| Product | Current | Recommended | Notes |
|---------|---------|-------------|-------|
| Broken Cinnamon KB | `090620` | `0906.20` | Crushed/ground |
| Cinnamon AA small broken | `09061900` | `0906.19.00` | Needs verification |
| Cinnamon Grade A 8cm | `0906.11.00` | `0906.11.00` | Neither crushed nor ground |
| Cinnamon Whole Stick grade A | `0906.11.3` | `0906.11` | Whole cinnamon |

**Reference**:
- HS 0906.1x - Cinnamon and tree flowers (Cinnamomum):
  - 0906.11 - Neither crushed nor ground
  - 0906.19 - Other
  - 0906.20 - Crushed or ground

---

### Nutmeg & Mace (HS 0908)

| Product | Current | Recommended | Notes |
|---------|---------|-------------|-------|
| Nutmeg AB | `0908.40.00.00` | `0908.11.00` | Whole nutmeg |
| Nutmeg broken/bwp | `090811` | `0908.12.00` | Broken/crushed |
| Nutmeg dust | `090812` | `0908.12.00` | Ground nutmeg |
| Nutmeg in shell | `0908.10.00.10` | `0908.10.00` | Nutmeg in shell |
| Mace | `09082100` | `0908.20.00` | Mace |

**Reference**:
- HS 0908.10 - Nutmeg, in shell
- HS 0908.11 - Nutmeg, neither crushed nor ground (shelled)
- HS 0908.12 - Nutmeg, crushed or ground
- HS 0908.20 - Mace

---

### Pepper Products (HS 0904)

| Product | Current | Recommended | Notes |
|---------|---------|-------------|-------|
| Blackpepper 500 gl | `09041120` | `0904.11.20` | Whole pepper |
| Blackpepper Broken | `0904.11` | `0904.12` | Crushed/ground |
| Whitepepper | `0904.11` | `0904.11.20` | White pepper |
| Long Pepper | `09041190` | `0904.11.90` | Long pepper (Piper longum) |
| Homalomena/Sugandhi Root | `0904.12` | Verify | May need different HS |

**Reference**:
- HS 0904.11 - Neither crushed nor ground
  - 0904.11.10 - White pepper
  - 0904.11.20 - Black pepper
  - 0904.11.90 - Other
- HS 0904.12 - Crushed or ground

---

### Ginger & Turmeric (HS 0910)

| Product | Current | Recommended | Notes |
|---------|---------|-------------|-------|
| Dried Ginger | `0910.10` | `0910.12` | Dried ginger |
| Fresh Ginger | `091011` | `0910.11` | Fresh ginger |
| Dried Slice Turmeric | `0910.30` | `0910.30` | Turmeric (correct) |
| Dried Sliced Curcuma | `0910.30.00` | `0910.30` | Curcuma/turmeric |
| Dried Sliced Galangal | `091009` | `0910.99.00` | Galangal (other) |

**Reference**:
- HS 0910.11 - Ginger, neither crushed nor ground
- HS 0910.12 - Ginger, crushed or ground
- HS 0910.30 - Turmeric
- HS 0910.99 - Other (including galangal)

---

### Vanilla (HS 0905)

| Product | Current | Recommended | Notes |
|---------|---------|-------------|-------|
| Vanilla Bean | `0905.10` | `0905.00` | Vanilla is single category |

**Reference**: HS 0905.00 - Vanilla

---

### Cashew Nuts (HS 0801)

| Product | Current | Recommended | Notes |
|---------|---------|-------------|-------|
| Cashew Nut W320 | `8013220` | `0801.32.20` | Shelled cashews, grade |
| Raw Cashew Nut | `0801 310000` | `0801.31.00` | Fresh/dried, shelled |

**Reference**:
- HS 0801.31 - Cashew nuts, fresh or dried, shelled
- HS 0801.32 - Cashew nuts, otherwise prepared/processed

---

### Beans & Legumes (HS 0713, 0810)

| Product | Current | Recommended | Notes |
|---------|---------|-------------|-------|
| Green Mung beans | `0713.31` | `0713.31.00` | Dried mung beans |
| Red Bean | `0713321000` | `0713.32.00` | Dried beans (Vigna) |
| Java Tamarind | `08109020` | `0813.40.00` | Tamarind |
| Velvet Tamarind | `08109020` | `0813.40.00` | Tamarind |
| Tamarind Seeds | `08134020` | `1207.99.00` | Oil seeds |

**Reference**:
- HS 0713.31 - Beans of the species Vigna mungo (urad)
- HS 0713.32 - Beans of the species Vigna radiata (mung)
- HS 0713.33 - Beans of the species Vigna aconitifolia (moth)
- HS 0813.40 - Tamarind
- HS 1207.99 - Other oil seeds

---

### Coffee (HS 0901)

| Product | Current | Recommended | Notes |
|---------|---------|-------------|-------|
| Coffee Bean Robusta Grade 2 | `0901.11.` | `0901.11.00` | Coffee, not roasted |
| Coffee Bean Robusta grade 3 | `0901.11` | `0901.11.00` | Coffee, not roasted |

**Reference**: HS 0901.11 - Coffee, not roasted, not decaffeinated

---

### Other Products

| Product | Current | Recommended | Notes |
|---------|---------|-------------|-------|
| Basil Seeds | `1209.91` | `1209.91.00` | Herb seeds |
| Bay Leaf | `0910991000` | `0910.92.00` | Bay leaves |
| Betel Nut | `0802.80` | `0802.80.00` | Betel nut (areca nut) |
| Cumin seeds | `090930` | `0909.30.00` | Cumin seeds |
| Dried Moringa Leaf | `1211.90.99` | `1211.90.39` | Moringa leaves |
| Moringa Leaf Powder | `12119099` | `1211.90.39` | Moringa powder |
| Gambier | `32019010` | `3201.90.10` | Vegetable tanning extracts |
| Long Mace | `0908.` | `0908.20.00` | Mace |

---

## Part 3: Quick Reference Table

| Product Category | HS Code (4-digit) | HS Code (6-digit) | Description |
|------------------|-------------------|-------------------|-------------|
| Clove | 0907 | 0907.00 | Cloves (including stems) |
| Cinnamon (whole) | 0906 | 0906.11 | Neither crushed nor ground |
| Cinnamon (ground) | 0906 | 0906.20 | Crushed or ground |
| Nutmeg (whole) | 0908 | 0908.11 | Neither crushed nor ground |
| Nutmeg (ground) | 0908 | 0908.12 | Crushed or ground |
| Mace | 0908 | 0908.20 | Mace |
| Black Pepper | 0904 | 0904.11.20 | Neither crushed nor ground |
| White Pepper | 0904 | 0904.11.10 | Neither crushed nor ground |
| Ginger (dried) | 0910 | 0910.12 | Crushed or ground |
| Ginger (fresh) | 0910 | 0910.11 | Neither crushed nor ground |
| Turmeric | 0910 | 0910.30 | Turmeric |
| Galangal | 0910 | 0910.99.00 | Other spices |
| Vanilla | 0905 | 0905.00 | Vanilla |
| Cashew (shelled) | 0801 | 0801.31 | Fresh or dried, shelled |
| Coffee | 0901 | 0901.11 | Not roasted |
| Tamarind | 0813 | 0813.40 | Tamarind |
| Cumin | 0909 | 0909.30 | Cumin seeds |
| Bay Leaf | 0910 | 0910.92 | Bay leaves |

---

## Part 4: Implementation Priority

### Priority 1: Critical (Incorrect Codes)
- Vanilla Bean: `0905.10` → `0905.00`
- Cashew Nut W320: `8013220` → `0801.32.20`
- Raw Cashew Nut: `0801 310000` → `0801.31.00`
- Nutmeg AB: `0908.40.00.00` → `0908.11.00`

### Priority 2: Format Consistency
- Standardize all codes to 6-digit format with periods
- Remove trailing periods from all codes
- Remove spaces within codes

### Priority 3: Verification Needed
- Homalomena / Sugandhi Root - verify correct HS chapter
- Long Mace - verify if same as regular mace
- Betel Nut classification

---

## Sources

- World Customs Organization (WCO) - HS Nomenclature
- Indonesian Customs - Tariff Book
- EU TARIC - Integrated Tariff

## Last Updated

2026-03-15
