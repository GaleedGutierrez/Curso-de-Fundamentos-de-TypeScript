import _ from "lodash";

const data = [
    {
        username: 'Galeed',
        role: 'admin'
    },
    {
        username: 'Valentina',
        role: 'seller'
    },
    {
        username: 'Zulema',
        role: 'seller'
    },
    {
        username: 'Santiago',
        role: 'customer'
    },
];

const rta = _.groupBy(data, ({role}) => role);
console.log({rta});
