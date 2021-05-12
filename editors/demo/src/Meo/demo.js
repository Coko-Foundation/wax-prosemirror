let demo = `<h1>MEO styles</h1>`;
demo += `<div>
<p>Some marks from MEO:<br/>
  <i>generic italic</i>,
  <b>generic bold</b>,<br/>
  <i class="enfasi1">simple emphasis (first level)</i>,<br/>
  <b class="enfasi2">strong emphasis (second level)</b>,<br/>
  <b class="enfasi3">stronger emphasis (third level)</b>,<br/>
  an acronym <span class="acronimo">ACRO</span>,<br/>
  a roman number <span class="ord-latino">MCDXLIV</span>,<br/>
  some inline ConTeXt code <span class="context">\\vadjust{\\page}</span>
<!--    <span class="nota-redazione">una nota redazionale inline</span>,-->
<!--    <span class="nota-redazione ndr-aperta">una nota redazionale aperta</span>,-->
<!--    <span class="nota-redazione ndr-info">una nota redazionale informativa</span>,-->
<!--    <mark class="evid-giallo">testo evidenziato in giallo</mark>,-->
<!--    <mark class="evid-rosso">testo evidenziato in rosso</mark>,-->
<!--    <mark class="evid-azzurro">testo evidenziato in azzurro</mark>,-->
<!--    <span class="intenzionale">una modifica intenzionale</span>,-->
<!--    <mark class="evid-verde">testo evidenziato in verde</mark>,-->
<!--    <span class="italiano">italiano nel testo</span>,-->
<!--    <span class="lingua-diversa">un’altra lingua nel testo</span>,-->
<!--    <span class="stile-da-definire">un testo con uno stile da definire</span>.-->
</p>
<table>
<tr>
  <td style="vertical-align: top; text-align: left">top-left</td>
  <td style="vertical-align: top; text-align: center">top-center</td>
  <td style="vertical-align: top; text-align: right">top-right</td>
</tr>
<tr>
  <td style="vertical-align: middle; text-align: left">middle-left</td>
  <td style="vertical-align: middle; text-align: center">middle-center</td>
  <td style="vertical-align: middle; text-align: right">middle-right</td>
</tr>
<tr>
  <td style="vertical-align: bottom; text-align: left">bottom-left</td>
  <td style="vertical-align: bottom; text-align: center">bottom-center</td>
  <td style="vertical-align: bottom; text-align: right">bottom-right</td>
</tr>
</table>
</div>`;

export { demo };
