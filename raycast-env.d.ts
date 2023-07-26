/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `search` command */
  export type Search = ExtensionPreferences & {
  /**  - Include attachments in search results. */
  "searchAttachments": boolean,
  /** Sort by - Sort search results by */
  "sort"?: "" | "lastmodified desc" | "created desc" | "title"
}
  /** Preferences accessible in the `people` command */
  export type People = ExtensionPreferences & {}
  /** Preferences accessible in the `recent` command */
  export type Recent = ExtensionPreferences & {}
  /** Preferences accessible in the `popular` command */
  export type Popular = ExtensionPreferences & {}
  /** Preferences accessible in the `go` command */
  export type Go = ExtensionPreferences & {}
  /** Preferences accessible in the `switch-site` command */
  export type SwitchSite = ExtensionPreferences & {}
  /** Preferences accessible in the `new-page` command */
  export type NewPage = ExtensionPreferences & {}
  /** Preferences accessible in the `new-blog` command */
  export type NewBlog = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `search` command */
  export type Search = {}
  /** Arguments passed to the `people` command */
  export type People = {}
  /** Arguments passed to the `recent` command */
  export type Recent = {}
  /** Arguments passed to the `popular` command */
  export type Popular = {}
  /** Arguments passed to the `go` command */
  export type Go = {}
  /** Arguments passed to the `switch-site` command */
  export type SwitchSite = {}
  /** Arguments passed to the `new-page` command */
  export type NewPage = {}
  /** Arguments passed to the `new-blog` command */
  export type NewBlog = {}
}
