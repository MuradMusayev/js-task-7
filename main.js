// Task-01
// Qrup yoldaşları massivi yaradın və onun üzərində əməliyyatlar aparın.
// Üç qrup yoldaşının adlarından ibarət massiv yaradın;
// Başqa bir qrup yoldaşının adını massivin sonuna əlavə edin;
// İlk adı silin;
// Massivi konsola çıxarın.

// let group = ["Murad", "Miri", "Orxan"];
// group.push("Ismayil")
// group.shift()
// console.log(group);

// Task-02(rest-in istifadesi)
// Massiv üzərində əməliyyatlar aparın.
// 10 ədəddən ibarət massiv yaradın.
// İlk 2 ədədi dəyişənlərə yazın və qalanlardan yeni massiv yaradın.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function gettest(a, b, ...c) {
//   return a + b - (c[0] + c[2]);
// }
// console.log(gettest(...arr));

// Task-03
// Massivin maksimal dəyərini tapın.
// 10 rəqəmdən ibarət massiv yaradın.
// Massiv deyil, arqumentlər qəbul edən Math.max funksiyasından istifadə edərək onların arasında maksimumu tapın.
// spread-operatorundan istifadə edərək massiv arqumentlərini funksiyaya ötürün.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function getMax(...params) {
//     console.log(Math.max(...params))
// }
// getMax(...arr)

// Task-04
// Massivin bütün elementlərinin dəyərin ikiqat artırın.
// 5 rəqəmdən ibarət massiv yaradın.
// Orijinal massivin surətini çıxarın və yeni massivin bütün elementlərini ikiqat artırın.
// Orijinal massivin dəyişmədiyini yoxlayın.

// let original = [2, 3, 4, 5, 6];
// let copy = original.map(element => element * 2);
// console.log(original);
// console.log(copy);

// Task-05
// Proqramlaşma şöbəsinin işçilərini saxlayan massiv yaradın.
// Şirkətin 10 işçisi haqqında məlumat olan massiv verilib. development massivi yaradın,
// hansıki proqramlaşma şöbəsinin işçilərini özündə saxlayacaq,
// yəni department özəlliyinin dəyəri «development» olan işçiləri.
// let employees = [
//   [ 'Jaylee Macy', 'marketing' ],
//   [ 'John Smith', 'management' ],
//   [ 'Blossom Hartley', 'design' ],
//   [ 'Austin Carpenter', 'marketing' ],
//   [ 'Joan Knowles', 'development' ],
//   [ 'Sally Nunez', 'management' ],
//   [ 'Laurel Ward', 'development' ],
//   [ 'Lark Simon', 'marketing' ],
//   [ 'Jane Stone', 'management' ],
//   [ 'Courtney Olson', 'development' ],
// ];

// let employees = [
//   ["Jaylee Macy", "marketing"],
//   ["John Smith", "management"],
//   ["Blossom Hartley", "design"],
//   ["Austin Carpenter", "marketing"],
//   ["Joan Knowles", "development"],
//   ["Sally Nunez", "management"],
//   ["Laurel Ward", "development"],
//   ["Lark Simon", "marketing"],
//   ["Jane Stone", "management"],
//   ["Courtney Olson", "development"],
// ];

// let development = []
// for (let i = 0; i < employees.length; i++) {
//     if (employees[i][1]==='development') {
//         development.push(employees[i][0])
//     }
// }
// console.log(development);

// Task-06
// Elektron növbəni idarə etmək üçün proqram tərtib edin.
// İstifadəçidən məlumat tələb edən və növbəni yeniləyən proqram tərtib edin.
// - İstifadəçidən növbəni yeniləmək üçün məlumat tələb edin.
// - Əgər istifadəçi yeni müştərinin ad və soyadını daxil edibsə, proqram müştərini növbənin sonuna əlavə edir.
// - İstifadəçi boş bir dəyər daxil edərsə, proqram növbədə birincinin adını və soyadını göstərir və onu növbədən çıxarır.
// - İstifadəçi «=» işarəsini daxil edərsə, proqram dayanır və növbə massivini konsola çıxarır.

// let arr = ["Murad Orucov", "Elchin Quliyev", "Murad Musayev"];
// let fullName = prompt("", "Orxan Ibrahimov");
// if (fullName !== "=" && fullName !== "") {
//   arr.push(fullName);
//   console.log(arr);
// } else if (fullName === "=") {
//   console.log(arr);
// } else if (fullName === "") {
//     console.log(arr[0]);
//     arr.shift()
//     console.log(arr);
// }

// Task-07
// Tam ədədlər massivini artan sırada düzən funksiya yazın.
// Tam ədədlər massivini qəbul edən, onu artan ardıcıllıqla sıralayan və sıralanmış massivi geri
// qaytaran sortArray funksiyasını yazın.

// let numbers = [2,6,3,7,9,1,3,5]
// function sortArray(params) {
//     params.sort()
//     console.log(params);
// }
// sortArray(numbers)

// Task-08
// Rəqəmlər massivini parametr kimi qəbul edən və həmin massivdən konsola bütün mənfi ədədləri çıxaran funksiya yazın.

// let numbers = [2, 6, -1, 98, -67, 100, 1, 45, -78];
// function getMinus(params) {
//   for (let i = 0; i < params.length; i++) {
//     if (params[i] < 0) {
//         console.log(params[i]);
//     }
//   }
// }
// getMinus(numbers)

// Task-09
// Rəqəmlər massivini parametr kimi qəbuil edən və həmin massivdəki bütün müsbət ədədləri konsola çıxaran funksiya yazın.
// İterasiya üçün anonim funksiyadan istifadə edin.

// let numbers = [3, 1, 0, -8, -2, 90];
// let a = (params) => {
//   for (let i = 0; i < params.length; i++) {
//     if (params[i] > 0) {
//       console.log(params[i]);
//     }
//   }
// };
// a(numbers)

// Task-10
// Geri çağırış funksiyalarını yazın (callback) printWithDashes, printWithHearts, printWithIndex.
// Massiv verilmişdir. 3 geri çağırış funksiyası yazın (callback): printWithDashes, printWithHearts, printWithIndex, hansıki onlar belə çağırılan zamanı
// names.forEach(printWithDashes);
// names.forEach(printWithHearts);
// names.forEach(printWithIndex);
// -array- const names = ["Michael", "Trevor", "Franklin", "Lamar", "Jimmy"];

// OUTPUT:
// kosnsolda çıxsın:
// -------------
// Michael
// -------------
// -------------
// Trevor
// -------------
// -------------
// Franklin
// -------------
// -------------
// Lamar
// -------------
// -------------
// Jimmy
// -------------
// <3<3<3<3 Michael <3<3<3<3
// <3<3<3<3 Trevor <3<3<3<3
// <3<3<3<3 Franklin <3<3<3<3
// <3<3<3<3 Lamar <3<3<3<3
// <3<3<3<3 Jimmy <3<3<3<3
// 0 - Michael
// 1 - Trevor
// 2 - Franklin
// 3 - Lamar
// 4 - Jimmy

// Task-11
// Kebab-case -də formatında olan mətni UPPER_CASE formatına çevirmək üçün funksiya yazın.
// Kebab-case formatında mətni parametr kimi qəbul edən və onu UPPER_CASE mətninə çevirən kebabToUpper funksiyasını yazın.
// INPUT: console.log(kebabToUpper('first-user'));
// OUTPUT:  FIRST_USER
// MAP,FILTER,FIND

// let str = "kebab-case".split;
// function kebabToUpper(params) {
//   let result = params.filter((element) => {
//    element[i]===element[i].toLowerCase() ? element[i].toUpperCase() || element[i]==="-" ? element[i].replace("_") : element[i]=element[i]
//   });
// }
// kebabToUpper(str);

// Task-12
// Orijinal massivin elementlərindən ibarət yeni massiv yaradın.
// Rəqəmlər massivi verilmişdir. Aşağıdakı kimi dəyişdirilən orijinal massivin elementlərindən ibarət yeni massiv yaradın:
// - mənfi ədədlər müsbət olublar;
// - müsbət ədədlər ikiqat artırılıb.
// let numbers = [1, 5, -7, 3, -9, 4, -6, 2];

// let numbers = [1, 5, -7, 3, -9, 4, -6, 2];

// let newArr = [];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] < 0) {
//     newArr.push(numbers[i] * -1);
//   } else if (numbers[i] > 0) {
//     newArr.push(numbers[i] * 2);
//   }
// }
// console.log(newArr);

// let numbers = [1, 5, -7, 3, -9, 4, -6, 2];
// let newArr = numbers.map((element) =>
//   element < 0 ? element * -1 : element * 2
// );
// console.log(newArr);

// Task-13
// Massivin ilk üç simvoldan ibarət elementini qaytaran funksiya yazın
// Mətnlər massivini parametr kimi qəbul edən və massivin ilk üç simvoldan ibarət elementini qaytaran funksiya yazın.

// let arr = ["ubhfjdc", "iendnc", "ier", "qazs", "rte","qwe"];
// let newArr = arr.filter((element) => element.length === 3);
// console.log(newArr);

// Task-14
// A hərfi ilə başlayan orijinal massivdəki elementlərdən ibarət yeni massiv yaradın.
// Adlar massivi verilib. A hərfi ilə başlayan orijinal massivdəki elementlərdən ibarət yeni massiv yaradın.

// let arr = ["Murad", "Anar", "amin", "Nihad", "Aksin", "Aaaaa"];
// let newArr = arr.filter(
//   (element) => (element[0] === "A") | (element[0] === "a")
// );
// console.log(newArr);

// Task-15
// ƏDV xaric qiymətlər saxlayan massivini qəbul edən və ƏDV daxil olmaqla olan qiymətlərdən ibarət yeni massiv qaytaran funksiya yazın.
// addTax() funksiyası yaradın. Verilmiş ƏDV-siz qiymətlərlə olan price massivini ona ötürün. addTax() funksiyasının köməyi ilə ƏDV ilə
// qiymətlərin daxil olduğu massiv yaratın və onu konsola çıxarın. ƏDV 20% təşkil edir.

// let amounts = [40, 70, 120, 20, 80];
// let finalArr = [];
// function addTax(params) {
//   for (let i = 0; i < params.length; i++) {
//     finalArr.push(params[i] + params[i] / 5);
//   }
//   console.log(finalArr);
// }
// addTax(amounts)

// Task-16
// Ədədlər massivindəki tək və cüt ədədləri saymaq üçün proqram yazın.
// Rəqəmlər massivini parametr kimi qəbul edən və massivdə neçə tək və cüt ədədin
// olması barədə məlumatıqaytaran countEvensAndOdds() funksiyasını yazın.
// Numune: Funksiya «Massivdə 4 cüt və 2 tək ədəd var» formasında mesaj qaytarır.

// let arr = [1, 6, 3, 7, 9, 6, 5, 8, 3, 2, 6, 7, 3, 6, 9, 0, 3];
// let evens = 0;
// let odds = 0;
// let evenArr = [];
// let oddsArr = [];

// function countEvensAndOdds(params) {
//   for (let i = 0; i < params.length; i++) {
//     if (params[i] === 0) {
//       evens = evens;
//       odds = odds;
//     } else if (params[i] % 2 === 0) {
//       evens += 1;
//       evenArr.push(params[i]);
//     } else {
//       odds += 1;
//       oddsArr.push(params[i]);
//     }
//   }
//   console.log(`Massivde ${evens} cut eded ve ${odds} tek eded var`);
//   console.log(`Evens: ${evenArr}`);
//   console.log(`Odds: ${oddsArr}`);
// }
// countEvensAndOdds(arr);
