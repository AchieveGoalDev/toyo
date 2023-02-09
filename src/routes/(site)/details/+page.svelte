<script>
  import LessonSchedule from "$lib/tables/LessonSchedule.svelte";
  let footnote = `
  	後期(50回)：2022年10月13日(木) ～12月23日(金)
※祝日により、回数が減る場合があります。
全キャンパスで開催
  `;
</script>

<LessonSchedule title="レッスンスケジュール" {footnote}>
  <table class="w-full">
    <tr>
      <th rowspan="3" class="bg-slate-100 border-r-2 border-slate-700 w-1/3">
        Something
      </th>
      <td class="border-b-2 border-slate-700">Other</td>
    </tr>
    <tr>
      <td>Thing</td>
    </tr>
    <tr>
      <td>Here</td>
    </tr>
  </table>
  <table class="w-full">
    <tr>
      <th rowspan="4" class="w-1/3 bg-slate-100"> Other something </th>
      <td> 1 </td>
      <td> 2 </td>
    </tr>
    <tr>
      <td> 1 </td>
      <td> 2 </td>
    </tr>
    <tr>
      <td> 1 </td>
      <td> 2 </td>
    </tr>
    <tr>
      <td>1</td>
      <td>2</td>
    </tr>
  </table>
  <table class="w-full">
    
  </table>
</LessonSchedule>
