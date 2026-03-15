# HS Code Quick Fixes

Quick reference for immediate fixes needed in products.json.

## Already Fixed ✅

Typos corrected (O → 0):
- `O907` → `0907` (Clove products)
- `O90620` → `090620` (Broken Cinnamon)
- `O9061900` → `09061900` (Cinnamon AA)
- `O91009` → `091009` (Galangal)
- `O9082100` → `09082100` (Mace)
- `O9041120` → `09041120` (Blackpepper)

Trailing periods removed from all HS codes.

---

## Still Needed ⚠️

### Format Standardization

Apply 6-digit format with periods: `XXXX.XX`

| Product | Current | Should Be |
|---------|---------|-----------|
| Clove | `0907` | `0907.00` |
| Broken Cinnamon KB | `090620` | `0906.20` |
| Cinnamon AA small broken | `09061900` | `0906.19.00` |
| Cinnamon Whole Stick | `0906.11.3` | `0906.11` |
| Mace | `09082100` | `0908.20.00` |
| Nutmeg broken/bwp | `090811` | `0908.12` |
| Nutmeg dust | `090812` | `0908.12` |
| Blackpepper 500 gl | `09041120` | `0904.11.20` |
| Long Pepper | `09041190` | `0904.11.90` |
| Fresh Ginger | `091011` | `0910.11` |
| Dried Sliced Galangal | `091009` | `0910.99` |
| Cumin seeds | `090930` | `0909.30` |
| Green Mung beans | `0713.31` | `0713.31.00` |
| Java/Velvet Tamarind | `08109020` | `0813.40` |
| Tamarind Seeds | `08134020` | `1207.99` |
| Basil Seeds | `1209.91` | `1209.91.00` |
| Bay Leaf | `0910991000` | `0910.92` |
| Betel Nut | `0802.80` | `0802.80.00` |
| Dried Moringa Leaf | `1211.90.99` | `1211.90.39` |
| Moringa Leaf Powder | `12119099` | `1211.90.39` |
| Gambier | `32019010` | `3201.90.10` |

### Incorrect HS Values (Verify Before Changing)

| Product | Current | Recommended | Verify |
|---------|---------|-------------|--------|
| Vanilla Bean | `0905.10` | `0905.00` | Vanilla is 0905.00 only |
| Cashew Nut W320 | `8013220` | `0801.32.20` | Missing leading 0 |
| Raw Cashew Nut | `0801 310000` | `0801.31.00` | Format wrong |
| Nutmeg AB | `0908.40.00.00` | `0908.11.00` | Too many digits |

---

## One-Line Fix Command

After verifying above, apply format standardization:

```bash
# Standardize all HS codes to 6-digit format
# This requires manual review per product
```

---

## Last Updated

2026-03-15
