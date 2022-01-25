import { Hotkey } from "obsidian";

export const MODIFIER_ICONS = {
    Mod: '⌘',
    Ctrl: '^',
    Meta: '⌘',
    Alt: '⌥',
    Shift: '⇧',
}

/**
 * A utility set that keeps track of the last time an item was added to the
 * set even it it was already in the set.
 */
export class OrderedSet<T> extends Set<T> {
    add(item: T) {
        if (this.has(item)) {
            this.delete(item);
        }

        return super.add(item);
    }

    valuesByLastAdd(): T[] {
        return Array.from(this).reverse()
    }
}

/**
 * A utility that generates the text of a Hotkey for UIs
 * @param hotkey Hotkey: The hotkey to generate text for
 * @returns string: The hotkey text
 */
export function generateHotKeyText(hotkey: Hotkey): string {
    var hotKeyStrings: string[] = [];
    for (const mod of hotkey.modifiers) {
        hotKeyStrings.push(MODIFIER_ICONS[mod])
    }

    hotKeyStrings.push(hotkey.key.toUpperCase())

    return hotKeyStrings.join(' ')
}