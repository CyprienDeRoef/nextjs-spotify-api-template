"use server";

import { AudioFeatures } from "@/lib/types";

/**
 * Retrieves the audio features of a track from the Spotify API.
 * @see https://developer.spotify.com/documentation/web-api/reference/get-audio-features
 * @param {string} token - The access token for the Spotify API.
 * @param {string} trackId - The ID of the track.
 * @returns {Promise<AudioFeatures | undefined>} A promise that resolves to the audio features of the track, or undefined if an error occurs.
 */
export default async function getTracksAudioFeatures(
  token: string,
  trackId: string
): Promise<AudioFeatures | undefined> {
  try {
    const res: Response = await fetch(
      `https://api.spotify.com/v1/audio-features/${trackId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return await res.json();
  } catch (error) {
    console.error(error);
  }
}
