import { SimplifiedAudiobook } from "./audiobook";
import { ExternalUrl, Image, Restriction, Saved, SpotifyType } from "./global";

/**
 * The saved chapter object.
 */
export type SavedChapter = Saved<"chapter", Chapter>;

/**
 * The structure containing the simplified details of the Spotify chapter.
 *
 * @property audio_preview_url - A URL to a 30 second preview (MP3 format) of the chapter. null if not available.
 * @property available_markets - A list of the countries in which the chapter can be played.
 * @property chapter_number - The number of the chapter.
 * @property description - A description of the chapter. HTML tags are stripped away from this field, use html_description field in case HTML tags are needed.
 * @property duration_ms - The chapter length in milliseconds.
 * @property explicit - Whether or not the chapter has explicit content (true = yes it does; false = no it does not OR unknown).
 * @property external_urls - External URLs for this chapter
 * @property href - A link to the Web API endpoint providing full details of the chapter.
 * @property html_description - A description of the chapter. This field may contain HTML tags.
 * @property id - The Spotify ID for the chapter.
 * @property images - The cover art for the chapter in various sizes, widest first.
 * @property is_playable - True if the chapter is playable in the given market. Otherwise false.
 * @property language - The language used in the chapter, identified by a ISO 639 code.
 * @property languages - A list of the languages used in the chapter, identified by their ISO 639 code.
 * @property name - The name of the chapter.
 * @property release_date - The date the chapter was first released, for example "1981-12-15". Depending on the precision, it might be shown as "1981" or "1981-12".
 * @property release_date_precision - The precision with which release_date value is known: "year", "month", or "day".
 * @property restrictions - Included in the response when a content restriction is applied.
 * @property resume_point - The user’s most recent position in the chapter. Set if the supplied access token is a user token and has the scope ‘user-read-playback-position’.
 * @property type - The object type: “chapter”.
 * @property uri - The Spotify URI for the chapter
 * @see https://developer.spotify.com/documentation/web-api/reference/get-audiobook-chapters
 */
export interface SimplifiedChapter {
  /** A URL to a 30 second preview (MP3 format) of the chapter. null if not available. */
  audio_preview_url: string | null;
  /** A list of the countries in which the chapter can be played. */
  available_markets: string[];
  /** The number of the chapter. */
  chapter_number: number;
  /** A description of the chapter. HTML tags are stripped away from this field, use html_description field in case HTML tags are needed. */
  description: string;
  /** The chapter length in milliseconds. */
  duration_ms: number;
  /** Whether or not the chapter has explicit content (true = yes it does; false = no it does not OR unknown). */
  explicit: boolean;
  /** External URLs for this chapter */
  external_urls: ExternalUrl;
  /** A link to the Web API endpoint providing full details of the chapter. */
  href: string;
  /** A description of the chapter. This field may contain HTML tags. */
  html_description: string;
  /** The Spotify ID for the chapter. */
  id: string;
  /** The cover art for the chapter in various sizes, widest first. */
  images: Image[];
  /** True if the chapter is playable in the given market. Otherwise false. */
  is_playable: boolean;
  /** The language used in the chapter, identified by a ISO 639 code. */
  language?: string;
  /** A list of the languages used in the chapter, identified by their ISO 639 code. */
  languages: string[];
  /** The name of the chapter. */
  name: string;
  /** The date the chapter was first released, for example "1981-12-15". Depending on the precision, it might be shown as "1981" or "1981-12". */
  release_date: string;
  /** The precision with which release_date value is known: "year", "month", or "day". */
  release_date_precision: string;
  /** Included in the response when a content restriction is applied. */
  restrictions: Restriction[];
  /** The user’s most recent position in the chapter. Set if the supplied access token is a user token and has the scope ‘user-read-playback-position’. */
  resume_point?: ResumePoint;
  /** The object type: “chapter”. */
  type: SpotifyType;
  /** The Spotify URI for the chapter */
  uri: string;
}

/**
 * The structure containing the entire details of the Spotify chapter.
 *
 * @extends SimplifiedChapter
 * @property audiobook - The audiobook on which the chapter belongs.
 * @see https://developer.spotify.com/documentation/web-api/reference/get-a-chapter
 */
export interface Chapter extends SimplifiedChapter {
  /** The audiobook on which the chapter belongs. */
  audiobook: SimplifiedAudiobook;
}

/**
 * An object containing the resume point.
 *
 * @property fully_played - Whether or not the chapter has been fully played by the user.
 * @property resume_position_ms - The user’s most recent position in the chapter in milliseconds.
 * @see https://developer.spotify.com/documentation/web-api/reference/#object-resumepointobject
 */
export interface ResumePoint {
  /** Whether or not the chapter has been fully played by the user. */
  fully_played: boolean;
  /** The user’s most recent position in the chapter in milliseconds. */
  resume_position_ms: number;
}
