/*
 * ÜLESANNE: Kirjuta funktsioon `countName`, mis leiab üles,
 * mitu etteantud eesnimega inimest on data.json failis.
 */

import { readFileSync } from 'fs';
import { findFirstName } from './exercise1';

export type Person = {
    name: string;
    age: number;
}

export function loadPeople() {
    const data = readFileSync('data.json', 'utf8');
    return JSON.parse(data) as Person[];
}

export function countName(name: string): number {
    const people = loadPeople();
    return 0;
}
    