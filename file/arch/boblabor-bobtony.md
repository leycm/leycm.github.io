# Sinus & Cosinus – Flow Projekt

---

## 1. Berechnungen in Excel  

### 1.1 Aufbau der Tabelle  
In **Excel** kann man Sinus, Cosinus, Tangens und Kotangens für Winkel von `0°` bis `360°` berechnen.  
Da Excel mit **Bogenmaß** (Radian) rechnet, muss man die Grad-Zahlen umwandeln.  

**So könnte eine Tabelle aussehen:**  

| Spalte | Inhalt |
|--------|------------------------------------|
| A      | Winkel von `0°` bis `360°`        |
| B      | `=SIN(BOGENMASS(A))`               |
| C      | `=COS(BOGENMASS(A))`               |
| D      | `=TAN(BOGENMASS(A))`               |
| E      | `=1/TAN(BOGENMASS(A))` (Kotangens) |

Da Excel keine **COT()**-Funktion hat, muss man für Kotangens (`COT`) die Formel `1/TAN()` verwenden.  

Mehr Infos zu Excel-Funktionen:  
- [Microsoft Support – Sinus Funktion](https://support.microsoft.com/de-de/office/sin-funktion-22942648-b550-4099-908c-aeebff2fd87f)  


### 1.2 Probleme mit Tangens und Kotangens  
Die Funktionen `TAN()` und `COT()` haben ein paar **Probleme bei bestimmten Winkeln**:  

- `TAN(90°)` und `TAN(270°)` gehen ins **Unendliche** und sind daher nicht definiert.  
- `COT(0°)` und `COT(180°)` führen zu einer **Division durch Null**.  

**Lösung:**  
Damit die Tabelle nicht fehlerhaft ist, kann man eine einfache Bedingung einbauen:  

```excle
=WENNFEHLER(1/TAN(BOGENMASS(A));"undefiniert")
```

So zeigt Excel bei ungültigen Werten einfach `"undefiniert"` an.  

Quellen der Funktionen:  
- [WENNFEHLER-Funktion in Excel](https://support.microsoft.com/de-de/office/wennfehler-funktion-c526fd07-caeb-47b8-8bb6-63f3e417f611)

---

## 2. Darstellung in GeoGebra  

### 2.1 So funktioniert es  
Mit **GeoGebra** kann man ein **rechtwinkliges Dreieck** zeichnen, bei dem sich der Winkel `α` von `-90°` bis `+90°` verändern lässt.  
Das Dreieck hat immer einen **festen 90°-Winkel**, dadurch entstehen die drei Seiten, mit denen Sinus, Cosinus und Tangens berechnet werden.  

Mehr dazu:  
- [GeoGebra – Offizielle Website](https://www.geogebra.org)  
- [GeoGebra Einführung in Trigonometrie](https://www.geogebra.org/m/v63uuv7w)  

Die Formeln für die Berechnung im Dreieck:  

| Funktion | Formel | Bedeutung |
|----------|--------|---------------------------|
| SIN      | `Gegenkathete / Hypotenuse` | j / i |
| COS      | `Ankathete / Hypotenuse` | f / i |
| TAN      | `Gegenkathete / Ankathete` | j / f |
| COT      | `Ankathete / Gegenkathete` | f / j |

### 2.2 Probleme in GeoGebra  
Manche Winkel funktionieren nicht:  

- **Bei 90° oder -90° gibt es kein Dreieck**, weil eine Kathete dann nur noch eine Linie ist.  
- **Bei 180° oder -180° sind alle Punkte auf einer Linie**, also entsteht auch kein Dreieck.  

**Lösung:**  
- Man kann GeoGebra so einstellen, dass nur Winkel zwischen `-89.9°` und `+89.9°` erlaubt sind.  
- Oder eine Anzeige einfügen, die anzeigt, wenn der Winkel problematisch ist.  

---

## 3. Python Rechner

### 3.1 Antwort bei update durch Regler:
```python
@app.callback(
    [dash.Output('triangle-plot', 'figure'),
     dash.Output('trig-plot-sincos', 'figure'),
     dash.Output('trig-plot-tancot', 'figure'),
     dash.Output('values-display', 'children')],
    [dash.Input('alpha-slider', 'value')]
)
```
- Diese Funktion wird jedes Mal ausgelöst, wenn der Wert des Schiebereglers (Winkel α) geändert wird.
- Vier Ausgaben:
  - `triangle-plot`: Graph für das Dreieck.
  - `trig-plot-sincos`: Graph für Sinus und Kosinus.
  - `trig-plot-tancot`: Graph für Tangens und Kotangens.
  - `values-display`: Text mit trigonometrischen Werten.

### 3.2 Berechnungen und Graph-Erstellung:

```python
rad = np.radians(alpha)
```
- Der Winkel α wird von Grad in Radianten umgerechnet.

```python
A = (0, 0)
B = (1, 0)
C = (np.cos(rad), np.sin(rad))
```
- Ein rechtwinkliges Dreieck mit den Ecken A, B und C wird erstellt.

```python
fig_sincos = go.Figure()
fig_sincos.add_trace(go.Scatter(x=x_vals, y=sin_vals, mode='lines', name='sin(α)', line=dict(color='red')))
fig_sincos.add_trace(go.Scatter(x=x_vals, y=cos_vals, mode='lines', name='cos(α)', line=dict(color='blue')))
```
- Sinus- und Kosinuskurven werden für die gegebenen Winkel berechnet und in einem Graphen angezeigt.

```python
fig_tancot = go.Figure()
fig_tancot.add_trace(go.Scatter(x=x_vals, y=tan_vals, mode='lines', name='tan(α)', line=dict(color='green')))
fig_tancot.add_trace(go.Scatter(x=x_vals, y=cot_vals, mode='lines', name='cot(α)', line=dict(color='purple')))
```
- Tangens- und Kotangenskurven werden mit einer Begrenzung für extreme Werte angezeigt.

### 3.3 Textanzeige Alle Werte Zeigen Werte:
```python
values_text = f"sin({alpha}°) = {np.sin(rad):.3f}, cos({alpha}°) = {np.cos(rad):.3f}, tan({alpha}°) = {np.tan(rad):.3f}, cot({alpha}°) = {1/np.tan(rad):.3f}"
```
- Die aktuellen trigonometrischen Werte für den gewählten Winkel α werden als Text formatiert.

### 3.4 Rückgabe der aktualisierten Inhalte:
- Die Callback-Funktion gibt die aktualisierten Diagramme und den Text zurück, um die Darstellung in der Webanwendung zu aktualisieren.

### 3.5 Start der App
```python
if __name__ == '__main__':
    app.run_server(debug=True)
```
- Der Dash-Server wird gestartet, wenn das Skript direkt ausgeführt wird, und stellt die App im Browser zur Verfügung.

### 3.6 Probleme

```python
# Werte bei tan/cot entfernen
tan_vals[np.abs(tan_vals) > 10] = np.nan
cot_vals[np.abs(cot_vals) > 10] = np.nan
```
- Der Tangens und Kotangens hat bei bestimmten Winkeln wie 90° und 270° extreme Werte, die zu einer unschönen Darstellung führen. Diese Werte werden auf `NaN` gesetzt, um sie aus der Grafik zu entfernen.

```python
plot_alpha = alpha if alpha >= 0 else 360 + alpha  # Negative Alpha-Werte -90 -> 270
```
- Negative Winkel (z.B. -30°) werden für die Darstellung im Diagramm angepasst, da der Plot in Dash nur positive Werte korrekt darstellt. Dieser Code sorgt dafür, dass negative Winkel korrekt als Werte im Bereich von 0 bis 360° verarbeitet werden.

Quelle:
- [Numpy doc Mathematical functions](https://numpy.org/doc/2.1/reference/routines.math.html)
- [Plotly Dash in 20min](https://dash.plotly.com/tutorial)

---

## Fazit  
- **Excel** ist super für Berechnungen in Tabellen, aber `tan(90°)` und `cot(0°)` sind problematisch.  
- **GeoGebra** eignet sich für **grafische Darstellungen**, kann aber nicht alle Winkel darstellen.
- **Python** Dash, um die formel darzustellen und sofort die Auswirkungen auf Sinus, Kosinus, Tangens und Kotangens sehen, sowohl in Diagrammen als auch in einem mathematischen Text.