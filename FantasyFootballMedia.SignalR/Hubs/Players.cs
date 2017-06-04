﻿using Microsoft.AspNet.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FantasyFootballMedia.SignalR.Hubs
{
    public class Players : Hub<IPlayer>
    {

        public override Task OnConnected()
        {
            // Set connection id for just connected client only
            return Clients.Client(Context.ConnectionId).SetConnectionId(Context.ConnectionId);
        }

        // Server side methods called from client
        public Task Subscribe(int matchId)
        {
            return Groups.Add(Context.ConnectionId, matchId.ToString());
        }

        public Task Unsubscribe(int matchId)
        {
            return Groups.Remove(Context.ConnectionId, matchId.ToString());
        }
    }

    public interface IPlayer
    {
        Task SetConnectionId(string connectionId);
        Task UpdatePlayer(MatchViewModel match);
        Task AddFeed(FeedViewModel feed);
        Task AddChatMessage(ChatMessage message);
    }
}
