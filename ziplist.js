// E27

function zipList(list1, list2) {
  let i = 0;
  let j = 0;
  const newList = [];
  while (i < list1.length && j < list2.length) {
    newList.push(list1[i]);
    newList.push(list2[j]);
    i++;
    j++;
  }
  return newList;
}

const lista = [1, 2, 3];
const listb = ['a', 'b', 'c'];
console.log(zipList(lista, listb));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(lista, listb));
