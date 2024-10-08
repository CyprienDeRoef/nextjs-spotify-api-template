import { Followers, PublicUser } from "./user";
import { Track } from "./track";
import { Episode } from "./episode";
import { ExternalUrl, Image, Paging, SpotifyType } from "./global";

/**
 * The structure containing the reference for the tracks of the playlist.
 *
 * @property href - A link to the Web API endpoint where full details of the playlist’s tracks can be retrieved.
 * @property total - The total number of tracks in playlist.
 */
export interface PlaylistTracksReference {
  /** A link to the Web API endpoint where full details of the playlist’s tracks can be retrieved. */
  href: string;
  /** The total number of tracks in playlist. */
  total: number;
}

/**
 * The structure containing the details of the Spotify Track in the playlist.
 *
 * @see https://developer.spotify.com/documentation/web-api/reference/get-playlists-tracks
 * @property added_at - The date and time the track or episode was added.
 * @property added_by - The Spotify user who added the track or episode.
 * @property is_local - Whether this track or episode is a local file or not.
 * @property track - Information about the track or episode.
 */
export interface PlaylistTrack {
  /** The date and time the track or episode was added.  */
  added_at: string | null;
  /** The Spotify user who added the track or episode. */
  added_by: PublicUser | null;
  /** Whether this track or episode is a local file or not. */
  is_local: boolean;
  /** Information about the track or episode. */
  track: Track | Episode | null;
}

/**
 * The structure containing the simplified details of the Spotify Playlist.
 *
 * @property collaborative - True if the owner allows other users to modify the playlist.
 * @property description - The playlist description. Only returned for modified, verified playlists, otherwise null.
 * @property external_urls - Known external URLs for this playlist.
 * @property href - A link to the Web API endpoint providing full details of the playlist.
 * @property id - The Spotify ID for the playlist.
 * @property images - Images for the playlist. The array may be empty or contain up to three images.
 * @property name - The name of the playlist.
 * @property owner - The user who owns the playlist.
 * @property snapshot_id - The version identifier for the current playlist. Can be supplied in other requests to target a specific playlist version
 * @property tracks - A collection containing a link ( href ) to the Web API endpoint where full details of the playlist’s tracks can be retrieved, along with the total number of tracks in the playlist.
 * @property uri - The Spotify URI for the playlist
 * @property type - The object type: “playlist”
 * @see https://developer.spotify.com/documentation/web-api/reference/get-a-list-of-current-users-playlists
 */
export interface SimplifiedPlaylist {
  /** True if the owner allows other users to modify the playlist. */
  collaborative: boolean;
  /** The playlist description. Only returned for modified, verified playlists, otherwise null. */
  description: string | null;
  /** Known external URLs for this playlist. */
  external_urls: ExternalUrl;
  /** A link to the Web API endpoint providing full details of the playlist. */
  href: string;
  /** The Spotify ID for the playlist. */
  id: string;
  /** Images for the playlist. The array may be empty or contain up to three images. */
  images: Image[];
  /** The name of the playlist. */
  name: string;
  /** The user who owns the playlist. */
  owner: PublicUser;
  /** The version identifier for the current playlist. Can be supplied in other requests to target a specific playlist version */
  snapshot_id: string;
  /** A collection containing a link ( href ) to the Web API endpoint where full details of the playlist’s tracks can be retrieved, along with the total number of tracks in the playlist. */
  tracks: PlaylistTracksReference;
  /** The Spotify URI for the playlist. */
  uri: string;
  /** The object type: “playlist” */
  type: SpotifyType;
}

/**
 * The structure containing the entire details of the Spotify Playlist.
 *
 * @extends SimplifiedPlaylist
 * @property followers - Information about the followers of the playlist.
 * @property public - The playlist’s public/private status: true the playlist is public, false the playlist is private, null the playlist status is not relevant.
 * @property tracks - Information about the tracks of the playlist. Note, a track object may be null. This can happen if a track is no longer available.
 * @see https://developer.spotify.com/documentation/web-api/reference/get-playlist
 */
export interface Playlist extends Omit<SimplifiedPlaylist, "tracks"> {
  /** Information about the followers of the playlist. */
  followers: Followers;
  /** The playlist’s public/private status: true the playlist is public, false the playlist is private, null the playlist status is not relevant. */
  public: boolean | null;
  /** Information about the tracks of the playlist. Note, a track object may be null. This can happen if a track is no longer available. */
  tracks: PlaylistTrack[];
}

/**
 * The structure returned by the [/browse/featured-playlists] endpoint.
 *
 * @property message - The message from the featured playlists.
 * @property playlists - The list of the featured playlists wrapped in Paging object.
 * @see https://developer.spotify.com/documentation/web-api/reference/get-featured-playlists
 */
export interface FeaturedPlaylists {
  /** The message from the featured playlists. */
  message: string;
  /** The list of the featured playlists wrapped in Paging object. */
  playlists: Paging<Playlist>;
}

/**
 * The query structure required by the [/users/{id}/playlists] enpoint.
 *
 * @property name - The name for the new playlist.
 * @property public - Defaults to true. If true the playlist will be public.
 * @property collaboratve - Defaults to false. If true the playlist will be collaborative.
 * @property description - The description for the playlist.
 * @see https://developer.spotify.com/documentation/web-api/reference/create-playlist
 */
export interface CreatePlaylistQuery {
  /** The name for the new playlist. */
  name: string;
  /** Defaults to true. If true the playlist will be public. */
  public?: boolean;
  /** Defaults to false. If true the playlist will be collaborative. */
  collaboratve?: boolean;
  /** The description for the playlist. */
  description?: string;
}
